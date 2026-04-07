export async function onRequestPost({ request, env }) {
  const formData = await request.formData();

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    mobile: formData.get('mobile'),
    suburb: formData.get('suburb'),
    message: formData.get('message')
  };

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: 'hwyat@hotmail.com',
      subject: 'New Quote Request',
      html: `<p>${data.name} (${data.email}) (${data.mobile})</p><p>${data.suburb}</p><p>${data.message}</p>`
    })
  });

  return new Response('OK');
}

/*completecleanperth@outlook.com*/