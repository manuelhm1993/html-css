const contenido = document.querySelector('#contenido');
const form = document.querySelector('#in #controls');

document.addEventListener('input', (e) => {
    const control = e.target.id;

    if(form[control]) {
        const px = (control == 'box-sizing') ? '' : 'px';
        
        contenido['style'][control] = form[control].value + px;
    }
});