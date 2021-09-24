const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundBody = estiloBody.backgroundColor;
console.log(backgroundBody);

for (let p of ps) {
    console.log(p);
    p.style.backgroundColor = backgroundBody;
    p.style.margin = '10px';
    p.style.color= '#fff';
    p.style.padding = '10px';
}
