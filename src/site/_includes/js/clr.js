document.addEventListener("DOMContentLoaded", function() {
    const folders = document.querySelectorAll('.foldername');

    const colorClasses = {
        '4Financial sysyem. Employability, Governemnt TAx, RENT PROperty, Law, retirement': 'folder-color-purple',
        '5Filming , Style': 'folder-color-indigo',
        '6. Youtube, SEO , Sites , Web Dev': 'folder-color-blue',
        '7.Defcon Machine Learning': 'folder-color-green',
        '8.Digigarden': 'folder-color-yellow'
    };

    folders.forEach((folder) => {
        const text = folder.textContent.trim();
        const colorClass = colorClasses[text];
        if (colorClass) {
            folder.classList.add(colorClass);
            console.log(`Added ${colorClass} to`, folder);
        } else {
            console.log(`No class for folder:`, text);
        }
    });
});
