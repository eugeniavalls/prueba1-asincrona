// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const container = document.getElementById('container');
const button = document.getElementById('button');
const newTitle = document.getElementById('title');
const newText = document.getElementById('text');

const phrase = async () =>{
    const randomNumber = Math.floor(Math.random()*224 + 1)
    const respuesta = await fetch(`https://api.adviceslip.com/advice/${randomNumber}`);
    const datos = await respuesta.json();

    newTitle.textContent = `ADVICE ${datos.slip.id}`;
    newText.textContent = datos.slip.advice;

    console.log(datos);

};
phrase();

button.addEventListener('click', () =>{
    phrase();
})