export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { email } = req.body;

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return res.status(400).json({ error: 'Valid email address required' });
        }

        // Here you can integrate with your preferred email service
        // For now, we'll just log it (in production, save to database/email service)
        
        console.log(`New newsletter subscription: ${email}`);
        console.log(`Timestamp: ${new Date().toISOString()}`);
        
        // You can integrate with:
        // - Airtable (free database)
        // - Google Sheets API  
        // - Mailchimp API
        // - SendGrid
        // - Or any other service

        // Example: Save to environment variable or external service
        // await saveToMailchimp(email);
        // await saveToAirtable(email);

        // Success response
        return res.status(200).json({ 
            success: true, 
            message: 'Successfully subscribed to newsletter' 
        });

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
}