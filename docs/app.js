
// Función para controlar el menú desplegable
function toggleMenu() {
    const boton = document.querySelector('#boton');
    const menu = document.querySelector('#menu');

    boton.addEventListener('click', () => {
        console.log('click');
        menu.classList.toggle('hidden');
    });
}
// Termina función para controlar el menú desplegable

// Función para controlar el acordeón
function setupAccordion() {
    const accordionButtons = document.querySelectorAll('.border-b button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            button.querySelector('svg').classList.toggle('rotate-180');
            content.classList.toggle('hidden');
        });
    });
}
// Fin para controlar el acordeón

// Llama a las funciones
toggleMenu();
setupAccordion();