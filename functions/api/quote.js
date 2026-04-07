export async function onRequestPost({ request, env }) {
  try {
    const formData = await request.formData();

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
      suburb: formData.get('suburb'),
      message: formData.get('message')
    };

    if (!data.name || !data.email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'hwyat@hotmail.com',
        subject: 'New Quote Request',
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Mobile:</strong> ${data.mobile || 'N/A'}</p>
          <p><strong>Suburb:</strong> ${data.suburb || 'N/A'}</p>
          <p><strong>Message:</strong><br>${data.message || 'N/A'}</p>
        `
      })
    });

    const resendText = await resendResponse.text();
    console.log('Resend status:', resendResponse.status);
    console.log('Resend body:', resendText);

    if (!resendResponse.ok) {
      return new Response(
        JSON.stringify({
          error: 'Failed to send email',
          resendStatus: resendResponse.status,
          resendBody: resendText
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Function error:', error);

    return new Response(
      JSON.stringify({ error: 'Server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
/*completecleanperth@outlook.com*/