// JavaScript for toggling themes
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');

    // Function to apply dark mode
    function applyDarkMode() {
        document.documentElement.style.setProperty('--background-color', '#2b2b2b');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--header-background-color', '#d8a909');
        document.documentElement.style.setProperty('--highlight-color', '#d8a909');
        themeToggle.textContent = '☀️'; // Sun icon for light mode
        themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
    }

    // Function to apply light mode
    function applyLightMode() {
        document.documentElement.style.setProperty('--background-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--header-background-color', '#ffeb99');
        document.documentElement.style.setProperty('--highlight-color', '#ffcc00');
        themeToggle.textContent = '🌙'; // Moon icon for dark mode
        themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
    }

    // Initialize the theme and button state
    window.addEventListener('DOMContentLoaded', () => {
        const currentBackground = getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim();
        if (currentBackground === '#2b2b2b') {
            applyDarkMode(); // Ensure correct initial state
        } else {
            applyLightMode();
        }
    });

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const isDarkMode = getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim() === '#2b2b2b';
        if (isDarkMode) {
            applyLightMode();
        } else {
            applyDarkMode();
        }
    });
}

// Add the header dynamically to all pages
document.body.insertAdjacentHTML(
    'afterbegin',
    `
    <header>
        <img src="../assets/banner.png" alt="Sammy Productions" style="display: block; margin: 0 auto;">
        <button id="theme-toggle" aria-label="Toggle Dark/Light Mode">🌙</button>
    </header>
    `
);

// Call the function to set up the toggle
setupThemeToggle();
