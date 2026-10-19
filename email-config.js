// Add the service ID, template ID, and public key from your EmailJS dashboard.
// These are public browser identifiers. Never put an email password or private key here.
window.IRON_PALM_EMAIL = {
  serviceId: 'service_3d5e2im',
  templateId: 'template_4kzvvdv',
  publicKey: 'IM6aA24S_qNbav2FZYIsY'
};

window.ironPalmSendEmail = async function ({ to, subject, name, message }) {
  const config = window.IRON_PALM_EMAIL;
  if (!window.emailjs || !config.serviceId || config.serviceId.startsWith('YOUR_') ||
      !config.templateId || config.templateId.startsWith('YOUR_') ||
      !config.publicKey || config.publicKey.startsWith('YOUR_')) return false;
  try {
    await window.emailjs.send(config.serviceId, config.templateId, {
      to_email: to, subject, client_name: name, message
    }, { publicKey: config.publicKey });
    return true;
  } catch (error) {
    console.error('Booking email could not be sent:', error);
    return false;
  }
};

