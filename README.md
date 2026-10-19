# Iron Palm booking website

This is a full-stack Node.js website with a password-protected appointment manager.

## Local run

Run `.\Start-Website.ps1` in PowerShell. The booking page is at http://localhost:8080 and the manager at http://localhost:8080/admin. The server prints a generated admin password on its first start. Save it privately.

## Free hosting

The included `render.yaml` configures a free Render web service. Render provides an `onrender.com` address, so a custom domain is optional. The service uses temporary storage: booking records can be lost after a restart, redeploy, or idle spin-down. Use a persistent database before relying on this for long-term booking records.

Set a strong `ADMIN_PASSWORD` privately in Render. The private manager is at `/admin`.

The site does not display the studio's phone number or email. It collects the client's name, email address, and mobile number with an appointment request; these contact details are visible to a signed-in studio manager for follow-up. Customers get a request code and status key to check request status.

## Client email updates

The website uses EmailJS with a connected personal email service such as Gmail. Create one EmailJS service and one template. Set the template recipient to `{{to_email}}`, subject to `{{subject}}`, and body to `Hello {{client_name}},\n\n{{message}}`. Add the service ID, template ID, and account public key to `email-config.js`. These are public browser identifiers; never put an email password or private key there. In EmailJS Domains, allow `https://iron-palm-booking.onrender.com`; add `http://localhost:8080` only for local testing. Personal mailbox services are suited to low-volume email and may enforce daily sending limits.

