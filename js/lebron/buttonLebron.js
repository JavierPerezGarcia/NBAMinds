const boton1=document.getElementById('lebronJames'),
      boton2=document.getElementById('michaelJordan'),
      boton3=document.getElementById('kareemAbdul');

boton1.addEventListener('click', ()=>{
    boton1.classList.toggle('right');    
});

boton2.addEventListener('click', ()=>{
    boton2.classList.toggle('left');    
});

boton3.addEventListener('click', ()=>{
    boton3.classList.toggle('right');
});