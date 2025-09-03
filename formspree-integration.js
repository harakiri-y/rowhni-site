// Alternative: Formspree Integration (works with any hosting)
// Replace the Vercel API call with this if needed:

async function submitToFormspree(email) {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    });
    
    if (!response.ok) {
        throw new Error('Formspree submission failed');
    }
    
    return response.json();
}

// Usage in site.js:
// Replace the fetch('/api/subscribe') call with:
// await submitToFormspree(email);