const contenido = document.querySelector('#contenido');
const form = document.querySelector('#in #controls');

document.addEventListener('input', (e) => {
    const control = e.target.id;

    if(form[control]) {
        switch(control) {
            case 'width':
                contenido.style.width  = form[control].value + 'px';
                break;
            case 'height':
                contenido.style.height  = form[control].value + 'px';
                break;
            case 'padding':
                contenido.style.padding  = form[control].value + 'px';
                break;
            case 'margin':
                contenido.style.margin  = form[control].value + 'px';
            break;
            case 'border-width':
                contenido.style.borderWidth  = form[control].value + 'px';
            break;
            case 'border-radius':
                contenido.style.borderRadius  = form[control].value + 'px';
            break;
            case 'box-sizing':
                console.log(form[control].value);
                contenido.style.boxSizing  = form[control].value;
            break;
        }
    }
});

