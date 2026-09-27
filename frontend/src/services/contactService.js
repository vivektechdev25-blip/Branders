/**
 * Contact Service - Connects BRANDERSSS Contact Form to Google Apps Script Lead Capture
 */

export const GOOGLE_APPS_SCRIPT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwz9ViVfuQVYgfmBb2lzg8CIEt0rcYP1DsQIxJZUetetMKPjpZDC1zfEnWsfj6PILFQtg/exec';

/**
 * Submits contact inquiry to the Google Apps Script Web App endpoint.
 *
 * Target Google Sheet Columns:
 * DATE | NAME | EMAIL | PHONE | SERVICE | MESSAGE
 *
 * Google Apps Script's `e.parameter` object receives data from URL query string
 * and application/x-www-form-urlencoded post data. We pass all parameter casing
 * variations (UPPERCASE matching sheet headers, lowercase, and TitleCase) across
 * BOTH the URL query string and URLSearchParams body to guarantee that every
 * column (NAME, EMAIL, PHONE, SERVICE, MESSAGE) is populated properly.
 *
 * @param {Object} formData
 * @param {string} formData.name - Client name
 * @param {string} [formData.company] - Brand or company name (optional)
 * @param {string} formData.phone - 10-digit contact number
 * @param {string} formData.email - Client email
 * @param {string} formData.service - Selected service of interest
 * @param {string} formData.message - Project goals / message
 */
export const submitContactInquiry = async (formData) => {
  const nameVal = (formData.name || '').trim();
  const emailVal = (formData.email || '').trim();
  const phoneVal = (formData.phone || '').trim();
  const serviceVal = (formData.service || '').trim();
  const companyVal = (formData.company || '').trim();
  const formattedMessage = companyVal
    ? `[Company: ${companyVal}] ${(formData.message || '').trim()}`
    : (formData.message || '').trim();

  // Multi-case dictionary to cover:
  // 1. Exact Sheet column headers: NAME, EMAIL, PHONE, SERVICE, MESSAGE
  // 2. Lowercase: name, email, phone, service, message
  // 3. Titlecase: Name, Email, Phone, Service, Message
  const fieldMapping = {
    name: nameVal,
    NAME: nameVal,
    Name: nameVal,
    email: emailVal,
    EMAIL: emailVal,
    Email: emailVal,
    phone: phoneVal,
    PHONE: phoneVal,
    Phone: phoneVal,
    service: serviceVal,
    SERVICE: serviceVal,
    Service: serviceVal,
    message: formattedMessage,
    MESSAGE: formattedMessage,
    Message: formattedMessage,
    company: companyVal,
    COMPANY: companyVal
  };

  const urlParams = new URLSearchParams();
  for (const [key, value] of Object.entries(fieldMapping)) {
    urlParams.append(key, value);
  }

  // Include parameters in URL query string to guarantee e.parameter population
  const targetUrl = `${GOOGLE_APPS_SCRIPT_ENDPOINT}?${urlParams.toString()}`;

  try {
    // Send using URLSearchParams body (application/x-www-form-urlencoded)
    const response = await fetch(targetUrl, {
      method: 'POST',
      body: urlParams
    });

    if (!response.ok) {
      throw new Error(`Submission failed with status ${response.status}. Please try again.`);
    }

    let data;
    try {
      data = await response.json();
    } catch (_) {
      data = { success: true, message: 'Lead saved successfully' };
    }

    if (data && data.success === false) {
      throw new Error(data.message || 'Unable to record lead. Please try again.');
    }

    // Secondary background sync with local backend database
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).catch(() => {});

    return {
      success: true,
      message: data.message || 'Thank you! Your inquiry has been received by Branderss. We will get back to you shortly.',
      data
    };
  } catch (err) {
    console.error('[Contact Service Error]', err);
    throw new Error(
      err.message && !err.message.includes('fetch')
        ? err.message
        : 'Could not send message. Please reach us directly on WhatsApp or Phone.'
    );
  }
};
