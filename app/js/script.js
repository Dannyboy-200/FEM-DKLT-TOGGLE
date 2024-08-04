document.addEventListener('DOMContentLoaded', function() {
    const lightModeRadio = document.getElementById('light');
    const darkModeRadio = document.getElementById('dark');
    const prefersDarkScheme =window.matchMedia('(prefers-color-scheme: dark)').matches;
    const toggleDisplay = document.getElementById('toggle-display');

    if(prefersDarkScheme) {
        document.body.setAttribute('data-theme', 'dark');
        darkModeRadio.checked = true;
        toggleDisplay.textContent = "Dark mode"
    } else {
        document.body.setAttribute('data-theme', 'light');
        lightModeRadio.checked = true;
        toggleDisplay.textContent = "Light mode"
    }

    lightModeRadio.addEventListener('change', function() {
        if(this.checked) {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light')
            toggleDisplay.textContent = "Light mode"
        }
    });

    darkModeRadio.addEventListener('change', function() {
        if(this.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark')
            toggleDisplay.textContent = "Dark mode"
        }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            darkModeRadio.checked = true;
        } else {
            lightModeRadio.checked = true
        }
    }
});