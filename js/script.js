// Tema claro / Tema escuro
const toggleThemeBtn = document.getElementById('toggle-theme');
const body = document.body;

//  Carregar tema salvo
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    body.classList.add('light');
    toggleThemeBtn.textContent = '☀️';
} else {
    toggleThemeBtn.textContent = '🌙'
}

// alternar tema 

toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    const isLight = body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    toggleThemeBtn.textContent = isLight ? '☀️' : '🌙'
});
// Scroll SUAVE

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' })
        }
    });

});

// Animações
const animatedElements =document.querySelectorAll('.section, .project-card')

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    {threshold:0.2}
);

animatedElements.forEach(el => observer.observe(el));