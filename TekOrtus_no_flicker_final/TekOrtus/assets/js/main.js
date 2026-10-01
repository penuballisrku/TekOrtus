const f=document.getElementById('contactForm');
if(f)f.addEventListener('submit',e=>{e.preventDefault();if(!f.checkValidity()){f.classList.add('was-validated');return}
f.reset();f.classList.remove('was-validated');document.getElementById('formOk').classList.remove('d-none')});
const R=document.documentElement;
function mark(){document.querySelectorAll('[data-theme-set]').forEach(b=>b.classList.toggle('active',b.dataset.themeSet===(R.dataset.theme||'teal')));document.querySelectorAll('[data-mode-set]').forEach(b=>b.classList.toggle('active',b.dataset.modeSet===(R.dataset.mode||'light')))}
document.addEventListener('click',e=>{const t=e.target.closest('[data-theme-set]'),m=e.target.closest('[data-mode-set]');
try{if(t){R.dataset.theme=t.dataset.themeSet;localStorage.setItem('tek-theme',t.dataset.themeSet)}
if(m){R.dataset.mode=m.dataset.modeSet;R.dataset.bsTheme=m.dataset.modeSet;localStorage.setItem('tek-mode',m.dataset.modeSet)}}catch(x){}mark()});mark();
// Technology cards are informational content; keep clicks/focus from causing navigation or visual jumps.
document.querySelectorAll('.tech-group').forEach(card => {
  card.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (link) e.preventDefault();
  });
});
