// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    themeIcon.src = body.classList.contains('dark-mode') ? 'sun.png' : 'moon.png';
});

// Apply saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.src = 'sun.png';
} else {
    body.classList.remove('dark-mode');
    themeIcon.src = 'moon.png';
}

// Support Form Email Validation
document.getElementById('support-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    
    if (!validateEmail(email)) {
        document.getElementById('error-msg').style.display = 'block';
        setTimeout(() => {
            document.getElementById('error-msg').style.display = 'none';
        }, 5000);
    } else {
        window.location.href = `mailto:jamespersonalproton@proton.me?subject=${subject}&body=${email}`;
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}
