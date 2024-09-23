// File: api/embed.js
import fetch from 'node-fetch';

export default async (req, res) => {
  const externalUrl = 'https://htnl.vercel.app/7.defcon-machine-learning/tech-behind/untitled.html';

  try {
    // Fetch the content from the external site
    const response = await fetch(externalUrl);
    const externalContent = await response.text();

    // Define your styled box and include the fetched content
    const pageContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Integrated Page</title>
        <style>
            body {
                font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
                color: rgb(198, 208, 245);
                background-color: #1a1a1a; /* Example dark background for contrast */
            }
            .content-box {
                box-sizing: border-box;
                width: 700px;
                height: 800px;
                border: 1px solid rgb(198, 208, 245);
                background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
                padding: 20px;
                margin: 20px auto; /* Center the box */
                overflow-y: auto; /* Allow scrolling if content overflows */
                color: rgb(198, 208, 245);
                line-height: 19.5px;
            }
            .external-content {
                width: 100%; /* Full width of the box */
                height: auto; /* Allow height to adjust based on content */
            }
        </style>
    </head>
    <body>
        <h1>Your Existing Title</h1>
        <p>This is your own content on the page.</p>
        <div class="content-box">
            <div class="external-content">
                ${externalContent}
            </div>
        </div>
        <p>More content below the embedded section.</p>
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
