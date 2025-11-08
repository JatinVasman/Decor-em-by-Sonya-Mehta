# Email Integration Guide

## Quick Setup for Contact Form Notifications

### Option 1: SendGrid (Recommended)

1. **Install SendGrid**:
   ```powershell
   npm install @sendgrid/mail
   ```

2. **Get API Key**:
   - Sign up at https://sendgrid.com
   - Create an API key in Settings → API Keys
   - Add to `.env.local`:
     ```
     SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
     ```

3. **Update `/src/pages/api/contact.js`**:
   ```javascript
   import sgMail from '@sendgrid/mail';
   import { adminNotificationTemplate, clientConfirmationTemplate } from '../../templates/emailTemplates';
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   
   // Inside handler function after validation:
   
   // Send admin notification
   const adminEmail = adminNotificationTemplate(formData);
   await sgMail.send({
     to: 'decorembysonyamehta@gmail.com',
     from: 'noreply@yourdomain.com', // Must be verified in SendGrid
     subject: adminEmail.subject,
     text: adminEmail.text,
     html: adminEmail.html
   });
   
   // Send client confirmation
   const clientEmail = clientConfirmationTemplate(formData);
   await sgMail.send({
     to: formData.email,
     from: 'decorembysonyamehta@gmail.com', // Must be verified in SendGrid
     subject: clientEmail.subject,
     text: clientEmail.text,
     html: clientEmail.html
   });
   ```

### Option 2: Nodemailer (SMTP)

1. **Install Nodemailer**:
   ```powershell
   npm install nodemailer
   ```

2. **Add SMTP credentials to `.env.local`**:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=decorembysonyamehta@gmail.com
   SMTP_PASS=your_app_password
   ```

3. **Update `/src/pages/api/contact.js`**:
   ```javascript
   import nodemailer from 'nodemailer';
   import { adminNotificationTemplate, clientConfirmationTemplate } from '../../templates/emailTemplates';
   
   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: process.env.SMTP_PORT,
     secure: false,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS
     }
   });
   
   // Send emails
   const adminEmail = adminNotificationTemplate(formData);
   await transporter.sendMail({
     from: 'decorembysonyamehta@gmail.com',
     to: 'decorembysonyamehta@gmail.com',
     subject: adminEmail.subject,
     text: adminEmail.text,
     html: adminEmail.html
   });
   
   const clientEmail = clientConfirmationTemplate(formData);
   await transporter.sendMail({
     from: 'decorembysonyamehta@gmail.com',
     to: formData.email,
     subject: clientEmail.subject,
     text: clientEmail.text,
     html: clientEmail.html
   });
   ```

### Option 3: Resend (Modern Alternative)

1. **Install Resend**:
   ```powershell
   npm install resend
   ```

2. **Get API Key**:
   - Sign up at https://resend.com
   - Create API key
   - Add to `.env.local`:
     ```
     RESEND_API_KEY=re_xxxxxxxxxxxxx
     ```

3. **Update `/src/pages/api/contact.js`**:
   ```javascript
   import { Resend } from 'resend';
   import { adminNotificationTemplate, clientConfirmationTemplate } from '../../templates/emailTemplates';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   const adminEmail = adminNotificationTemplate(formData);
   await resend.emails.send({
     from: 'Decor\'em <noreply@yourdomain.com>',
     to: 'decorembysonyamehta@gmail.com',
     subject: adminEmail.subject,
     html: adminEmail.html
   });
   
   const clientEmail = clientConfirmationTemplate(formData);
   await resend.emails.send({
     from: 'Sonya Mehta <decorembysonyamehta@gmail.com>',
     to: formData.email,
     subject: clientEmail.subject,
     html: clientEmail.html
   });
   ```

## Testing

### Test Locally:
```powershell
# Start dev server
npm run dev

# Submit test form at http://localhost:3000/contact
# Check terminal for console.log output
# Check email inbox
```

### Test Email Templates:
Create a test file `test-email.js`:
```javascript
import { adminNotificationTemplate, clientConfirmationTemplate } from './src/templates/emailTemplates.js';

const testData = {
  fullName: 'John Doe',
  email: 'john@example.com',
  phone: '(123) 456-7890',
  service: 'kitchen',
  location: 'Sugar Land',
  budget: '50k-150k',
  message: 'I would like to remodel my kitchen...',
  consent: true
};

console.log('Admin Email HTML:', adminNotificationTemplate(testData).html);
console.log('Client Email HTML:', clientConfirmationTemplate(testData).html);
```

## Troubleshooting

### Gmail SMTP Issues:
- Enable "Less secure app access" OR
- Use App Passwords (Settings → Security → 2-Step Verification → App passwords)

### SendGrid Issues:
- Verify sender email in SendGrid
- Check API key permissions
- Review SendGrid activity logs

### Rate Limiting:
Add rate limiting to prevent spam:
```javascript
// Install: npm install express-rate-limit
import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3 // 3 submissions per 15 minutes
});
```

## Next Steps

1. Choose email service provider
2. Install dependencies
3. Add API keys to `.env.local`
4. Update `/src/pages/api/contact.js`
5. Test with real submissions
6. Monitor delivery rates
7. Set up email analytics (optional)

## Support

For questions:
- SendGrid: https://docs.sendgrid.com
- Nodemailer: https://nodemailer.com/about/
- Resend: https://resend.com/docs
