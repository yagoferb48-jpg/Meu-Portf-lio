// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Alternar tema claro/escuro
const btnTema = document.getElementById('toggle-tema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btnTema.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// Animação de aparecer ao rolar
const sections = document.querySelectorAll('.fade-in');
const aparecer = () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', aparecer);

// Botão voltar ao topo
const btnTopo = document.getElementById("btnTopo");
btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


















