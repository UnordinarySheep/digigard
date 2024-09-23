---
{"dg-publish":true,"permalink":"/8-digigarden/untitled/","noteIcon":"2"}
---

---
title: "Digigarden"
---
# Your Existing Title

<div id="embedded-content"></div> <!-- Placeholder for the external content -->

<script>
    async function loadExternalContent() {
        try {
            const response = await fetch('/api/embed'); // Call your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const content = await response.text();
            document.getElementById('embedded-content').innerHTML = content; // Insert content into the placeholder
        } catch (error) {
            console.error('Error loading external content:', error);
        }
    }

    // Load the content when the page loads
    window.onload = loadExternalContent;
</script>

More content below the embedded section.

