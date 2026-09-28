-- ========================================================================
-- BRANDERSS — SUPABASE POSTGRESQL SCHEMA SETUP
-- Project: amoigwxxcdoypninyhes
-- Target: Public Lead & Contact Inquiries
-- ========================================================================

-- 1. Create contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    company VARCHAR(120) DEFAULT '',
    phone VARCHAR(25) NOT NULL,
    email VARCHAR(150) NOT NULL,
    service VARCHAR(100) NOT NULL,
    message VARCHAR(2000) NOT NULL,
    source VARCHAR(50) DEFAULT 'website',
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Performance & Sorting Indexes
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON public.contacts (status);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON public.contacts (email);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- 4. Access Policy:
-- The backend API communicates via the Supabase Service Role Key, which
-- bypasses RLS by default.
-- For additional clarity and defense-in-depth, explicitly grant full access to service_role:
CREATE POLICY "Allow backend service role full access" 
ON public.contacts 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- 5. Optional Auto-Update Timestamp Trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS trigger_contacts_updated_at ON public.contacts;
CREATE TRIGGER trigger_contacts_updated_at
    BEFORE UPDATE ON public.contacts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
