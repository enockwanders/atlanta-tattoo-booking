# Iron Palm booking website

This is a full-stack Node.js website with a password-protected appointment manager.

## Local run

Run `.\Start-Website.ps1` in PowerShell. The booking page is at http://localhost:8080 and the manager at http://localhost:8080/admin. The server prints a generated admin password on its first start. Save it privately.

## Free hosting

The included `render.yaml` configures a free Render web service. Render provides an `onrender.com` address, so a custom domain is optional. The service uses temporary storage: booking records can be lost after a restart, redeploy, or idle spin-down. Use a persistent database before relying on this for long-term booking records.

Set a strong `ADMIN_PASSWORD` privately in Render. The private manager is at `/admin`.

The site does not display the studio's phone number or email. It collects the client's name, email address, and mobile number with an appointment request; these contact details are visible to a signed-in studio manager for follow-up. Customers get a request code and status key to check request status.

