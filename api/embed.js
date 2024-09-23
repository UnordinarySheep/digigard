// File: api/embed.js
import fetch from 'node-fetch';

export default async (req, res) => {
  // URL of the external content to fetch
  const externalUrl = 'https://htnl.vercel.app/7.defcon-machine-learning/tech-behind/untitled.html';

  try {
    // Fetch the content from the external site
    const response = await fetch(externalUrl);
    const externalContent = await response.text();

    // Combine the fetched content with your existing page structure
    const pageContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Integrated Page</title>
        <style>
            /* Add your custom styles here */
            body { font-family: Arial, sans-serif; }
            h1 { color: #333; }
            #external-content { margin-top: 20px; }
        </style>
    </head>
    <body>
        <h1>Your Existing Title</h1>
        <p>This is your own content on the page, before the embedded content.</p>
        <div id="external-content">
            <!-- Embedded Content from the External Site -->
            ${externalContent}
        </div>
    </body>
    </html>
    `;

    // Send the combined HTML back as the response
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(pageContent);
  } catch (error) {
    console.error('Error fetching external content:', error);
    res.status(500).send('Error fetching external content.');
  }
};
