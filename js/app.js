// Mensaje de bienvenida
console.log("Bienvenido a la página de Música Urbana");

// Scroll suave
document.querySelectorAll('a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const seccion = document.querySelector(this.getAttribute('href'));
        seccion.scrollIntoView({ behavior: 'smooth' });
    });
});
