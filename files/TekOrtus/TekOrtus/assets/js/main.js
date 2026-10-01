if(window.AOS)AOS.init({duration:600,once:true,disable:matchMedia('(prefers-reduced-motion: reduce)').matches});
const f=document.getElementById('contactForm');
if(f)f.addEventListener('submit',e=>{e.preventDefault();if(!f.checkValidity()){f.classList.add('was-validated');return}
f.reset();f.classList.remove('was-validated');document.getElementById('formOk').classList.remove('d-none')});
