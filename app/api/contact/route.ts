import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_EMAIL || 'admin@softx.world';
    const from = process.env.EMAIL_FROM || 'SoftX Contact <noreply@softx.world>';

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New Lead: ${name} — ${service}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0ea5e9, #3b82f6); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
          </div>
          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #0ea5e9; text-decoration: none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${escapeHtml(company)}</td>
              </tr>` : ''}
              ${phone ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${escapeHtml(phone)}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; vertical-align: top;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${escapeHtml(service)}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #1e293b; white-space: pre-wrap;">${escapeHtml(message)}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #0ea5e9;">
              <p style="margin: 0; color: #64748b; font-size: 13px;">
                Reply directly to this email to respond to <strong>${escapeHtml(name)}</strong> at ${escapeHtml(email)}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
