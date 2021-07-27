document.addEventListener('DOMContentLoaded', function () {
    // Declaración de variables
    let input = document.getElementById('input');
    let boton = document.getElementById('boton');
    let vinetas = document.getElementById('vinetas');
    let romanos = document.getElementById('romanos');
    let vinetaCuadrada = document.getElementById('vineta-cuadrada');
    let numeroRomano = document.getElementById('numero-romano');

    // Función que se ejecuta con el botón INSERTAR
    boton.addEventListener('click', function () {
        if (input.value.trim() == '') {
            alert('Ingresa un texto')
            return;
        } else if (vinetaCuadrada.checked) {
            vinetas.innerHTML += `<li type="square">${input.value}</li>`;
            return;
        } else if (numeroRomano.checked) {
            romanos.innerHTML += `<li>${input.value}</li>`;
            return;
        } else {
            alert('Selecciona una lista');
            return;
        }
    });
});
