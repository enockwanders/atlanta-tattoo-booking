# Iron Palm booking website

## What is included
A Node.js website with the public booking page and a password-protected studio manager at `/admin`.

## Free hosting setup
This repository includes a Render Blueprint configured for the free web service. Render provides a free `onrender.com` address, so no custom domain is needed.

**Free hosting limitation:** booking records are stored on the server's temporary filesystem. They may be lost when the service restarts, redeploys, or spins down. Free Render services can also take about a minute to wake after inactivity. Do not rely on this version for permanent booking records.

## Publish
1. Sign in to Render and choose **New → Blueprint**.
2. Connect the GitHub repository `enockwanders/atlanta-tattoo-booking`.
3. Set a strong value for `ADMIN_PASSWORD` when prompted. Keep it private.
4. Create the service using the free plan.
5. Open the URL Render gives you. The public site is at the root; the manager is at `/admin`.

The site does not display or collect a business phone number or email. Customers receive a request code and private key to check their request status.
