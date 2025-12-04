document.querySelectorAll('nava a').forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        const traget=document.querySelector(link.getAttribute('href'));
        traget.scrollIntoView({behavior:'smooth'});
    });
});
const btnTema=document.getElementById('toggle-tema');
btnTema.addEventListener('click',() => {
    document.body.classList.toggle('light');
    btnTema.textContent=document.body.classList.contains('light')? '☀️' : '🌙'
});

const sections = document.querySelectorAll('.fade-in');
const aparecer= () => {
    sections.forEach(
        sec=>{
            const top = sec.getBoundingClientRect().top;
            if(top < window.innerHeight - 100) sec.classList.add('visible');
        });
};
bntTopo.addEventListener('click',()=>{
window.scrollTo({top:0,behavior:'smooth'});
});





















