import '../css/componentes.css'
// import logo404 from '../assets/img/404211.jpg';
// import shep from '../assets/img/shep.gif';

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre} borther`;

    document.body.append(h1)

    // img
    // console.warn('Heyyy ' + logo404, shep);
    // const img = document.createElement('img'),
    //       img2 = document.createElement('img');
    // img.src = logo404;
    // img2.src = shep;
    // document.body.append(img, img2);
    
}