/**
 * Automated Security & Rate Limiting Verification Suite
 * Tests all 10 security audit requirements against the active Branderss backend
 */

import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = 'http://localhost:5000';
const ADMIN_API_KEY = process.env.ADMIN_API_KEY || 'branderss-admin-dev-secret-key';

async function runTests() {
  console.log('======================================================');
  console.log('🛡️  BRANDERSS SECURITY & RATE LIMITING TEST SUITE');
  console.log('======================================================\n');

  let passed = 0;
  let failed = 0;

  const assert = (condition, name, details = '') => {
    if (condition) {
      console.log(`✅ [PASS] ${name}`);
      passed++;
    } else {
      console.error(`❌ [FAIL] ${name} ${details ? `(${details})` : ''}`);
      failed++;
    }
  };

  try {
    // 1. Test Normal Contact Submission
    console.log('\n--- 1. Testing Normal Contact Submission ---');
    const validPayload = {
      name: 'Test Client',
      company: 'Heritage Hotel',
      phone: '9119673841',
      email: 'test.client@example.com',
      service: 'Hotels & Luxury Resorts',
      message: 'We are interested in booking funnels and branding for our hotel.'
    };

    const res1 = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Origin: 'http://localhost:3000'
      },
      body: JSON.stringify(validPayload)
    });
    const data1 = await res1.json();
    assert(res1.status === 201, 'Normal valid submission returns 201 Created', `Status: ${res1.status}`);
    assert(data1.success === true, 'Response has success: true');
    assert(res1.headers.get('ratelimit-limit') === '5', 'RateLimit-Limit header present and equals 5');

    // 2. Test Invalid Email
    console.log('\n--- 2. Testing Invalid Email ---');
    const invalidEmailPayload = { ...validPayload, email: 'not-an-email' };
    const res2 = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: 'http://localhost:3000' },
      body: JSON.stringify(invalidEmailPayload)
    });
    const data2 = await res2.json();
    assert(res2.status === 400, 'Invalid email returns 400 Bad Request', `Status: ${res2.status}`);
    assert(data2.errors && data2.errors.email, 'Validation errors include email error');

    // 3. Test Missing Required Fields
    console.log('\n--- 3. Testing Missing Required Fields ---');
    const missingFieldsPayload = { email: 'client@example.com' };
    const res3 = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: 'http://localhost:3000' },
      body: JSON.stringify(missingFieldsPayload)
    });
    const data3 = await res3.json();
    assert(res3.status === 400, 'Missing fields returns 400 Bad Request', `Status: ${res3.status}`);
    assert(data3.errors && data3.errors.name && data3.errors.phone && data3.errors.service && data3.errors.message, 'All missing fields flagged in response');

    // 4. Test Extremely Long Message (>2000 characters)
    console.log('\n--- 4. Testing Oversized Message Field ---');
    const longMessagePayload = {
      ...validPayload,
      message: 'A'.repeat(2005)
    };
    const res4 = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: 'http://localhost:3000' },
      body: JSON.stringify(longMessagePayload)
    });
    const data4 = await res4.json();
    assert(res4.status === 400, 'Oversized message (>2000 chars) returns 400 Bad Request', `Status: ${res4.status}`);
    assert(data4.errors && data4.errors.message, 'Message length limit flagged in validation');

    // 5. Test Honeypot / Anti-Bot Detection
    console.log('\n--- 5. Testing Anti-Bot Honeypot Field ---');
    const botPayload = {
      ...validPayload,
      _gotcha: 'http://spam-link.ru'
    };
    const res5 = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: 'http://localhost:3000' },
      body: JSON.stringify(botPayload)
    });
    assert(res5.status === 400, 'Bot honeypot submission rejected with 400', `Status: ${res5.status}`);

    // 6. Test Malformed JSON
    console.log('\n--- 6. Testing Malformed JSON Body ---');
    const res6 = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: 'http://localhost:3000' },
      body: '{ "broken_json": true, '
    });
    const data6 = await res6.json();
    assert(res6.status === 400, 'Malformed JSON returns clean 400 Bad Request', `Status: ${res6.status}`);
    assert(data6.message && data6.message.includes('Malformed JSON'), 'Malformed JSON error message clean without stack trace');

    // 7. Test Security Headers (Helmet)
    console.log('\n--- 7. Testing Helmet Security Headers ---');
    const healthRes = await fetch(`${BASE_URL}/api/health`);
    assert(healthRes.headers.get('x-content-type-options') === 'nosniff', 'X-Content-Type-Options: nosniff present');
    assert(healthRes.headers.get('x-frame-options') === 'DENY', 'X-Frame-Options: DENY present');
    assert(healthRes.headers.get('referrer-policy') === 'strict-origin-when-cross-origin', 'Referrer-Policy header present');

    // 8. Test Private Lead Endpoint Authentication
    console.log('\n--- 8. Testing Private Lead Endpoint Security ---');
    const unauthGetRes = await fetch(`${BASE_URL}/api/contact`);
    assert(unauthGetRes.status === 401, 'Unauthenticated GET /api/contact blocked with 401 Unauthorized', `Status: ${unauthGetRes.status}`);

    const authGetRes = await fetch(`${BASE_URL}/api/contact`, {
      headers: { 'x-admin-key': ADMIN_API_KEY }
    });
    assert(authGetRes.status === 200, 'Authenticated GET /api/contact with admin key returns 200 OK', `Status: ${authGetRes.status}`);

    // 9. Test Unauthorized CORS Origin Rejection
    console.log('\n--- 9. Testing CORS Origin Restrictions ---');
    const badCorsRes = await fetch(`${BASE_URL}/api/health`, {
      headers: { Origin: 'http://malicious-attacker-site.com' }
    });
    assert(badCorsRes.status === 403, 'Unauthorized CORS origin rejected with 403 Forbidden', `Status: ${badCorsRes.status}`);

    // 10. Test Rate Limiting Trigger (Limit = 5 requests per 15 min on POST /api/contact)
    console.log('\n--- 10. Testing Rate Limiting Trigger ---');
    console.log('Sending successive requests to hit the 5-request limit...');
    let hit429 = false;
    let rateLimitResponseData = null;

    for (let i = 0; i < 6; i++) {
      const rlRes = await fetch(`${BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Origin: 'http://localhost:3000' },
        body: JSON.stringify(validPayload)
      });
      if (rlRes.status === 429) {
        hit429 = true;
        rateLimitResponseData = await rlRes.json();
        break;
      }
    }

    assert(hit429, 'Rate limiter triggers HTTP 429 Too Many Requests after limit reached');
    assert(
      rateLimitResponseData && rateLimitResponseData.message === 'Too many requests. Please try again later.',
      '429 response message matches specification: "Too many requests. Please try again later."'
    );

    console.log('\n======================================================');
    console.log(`🏁 TEST RESULTS: ${passed} PASSED | ${failed} FAILED`);
    console.log('======================================================\n');

    process.exit(failed > 0 ? 1 : 0);
  } catch (err) {
    console.error('[Test Error]', err);
    process.exit(1);
  }
}

runTests();
