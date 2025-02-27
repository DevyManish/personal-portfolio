import { adminEmail, userEmail } from '@/lib/userEmail';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {

        const body = await request.json().catch(e => {
            console.error('Failed to parse request body:', e);
            return null;
        });

        if (!body) {
            return new Response(JSON.stringify({ message: 'Invalid request body' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        console.log('Form data received:', { name, email, message });

        const { data: supabaseData, error: supabaseError } = await supabase
            .from('form_submissions')
            .insert([{ name, email, message }]);

        if (supabaseError) {
            console.error('Supabase error:', supabaseError);
            return new Response(JSON.stringify({
                message: 'Database error',
                error: supabaseError.message,
                code: supabaseError.code
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        console.log('Data inserted into Supabase:', supabaseData);

        let userEmailResponse;
        try {
            userEmailResponse = await resend.emails.send({
                from: 'hello@resend.dev',
                to: email,
                subject: 'Thank you for contacting Manish',
                html: userEmail(name),
            });
            console.log('Resend user email response:', userEmailResponse);
        } catch (emailError) {
            console.error('Error sending user email:', emailError);
        }

        let adminEmailResponse;
        try {
            adminEmailResponse = await resend.emails.send({
                from: 'hello@resend.dev',
                to: 'manishguptacpn@gmail.com',
                subject: 'New Form Submission',
                html: adminEmail(name, email, message),
            });
            console.log('Resend admin email response:', adminEmailResponse);
        } catch (emailError) {
            console.error('Error sending admin email:', emailError);
        }

        return new Response(JSON.stringify({
            message: 'Form submitted successfully!',
            supabase: supabaseError ? 'Failed' : 'Success',
            userEmail: userEmailResponse ? 'Sent' : 'Failed',
            adminEmail: adminEmailResponse ? 'Sent' : 'Failed'
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('API route error:', error);
        return new Response(JSON.stringify({
            message: 'Something went wrong.',
            error: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}