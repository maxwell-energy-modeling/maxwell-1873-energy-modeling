document.addEventListener("DOMContentLoaded", () => {
    // 1. Math Rendering using KaTeX
    if (typeof renderMathInElement === "function") {
        renderMathInElement(document.body, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false },
                { left: '\\(', right: '\\)', display: false },
                { left: '\\[', right: '\\]', display: true }
            ],
            throwOnError: false
        });
    }

    // 2. Theme Toggling
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check saved theme or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    if (themeToggleBtn) {
        themeToggleBtn.textContent = body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';

        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const isDark = body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        });
    }

    // 3. Setup Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const observeElements = document.querySelectorAll('.observe');
    observeElements.forEach(el => observer.observe(el));

    // 4. Interactive effect for table cells
    const tableCells = document.querySelectorAll('.trigger-highlight');
    tableCells.forEach(cell => {
        cell.addEventListener('mousemove', (e) => {
            const rect = cell.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cell.style.setProperty('--mouse-x', `${x}px`);
            cell.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
