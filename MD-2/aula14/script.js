const paragrafos = document.querySelectorAll('.paragrafos');
const ps = paragrafos[0].querySelectorAll('p');


const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}

console.log(backgroundColorBody);