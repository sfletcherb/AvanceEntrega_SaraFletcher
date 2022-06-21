
const input = document.getElementById("buscador");
const div = document.getElementById("resultado");
const div1 = document.getElementById("resultado1");
const div2 = document.getElementById("resultado2");
const div3= document.getElementById("seleccion");

const search = document.getElementById('buscador')
search.addEventListener('input', ()=> searchInput(search.value));

const boton1 = document.getElementById("btn1");
boton1.addEventListener("click", () => {
    respuesta1();
})
const boton2 = document.getElementById("btn2");
boton2.addEventListener("click", () => {
    respuesta2();
})
const boton3 = document.getElementById("btn3");
boton3.addEventListener("click", () => {
    respuesta3();
})

const boton4 = document.getElementById("btn4");
boton4.addEventListener("click", () => {
   domicilio();
})

