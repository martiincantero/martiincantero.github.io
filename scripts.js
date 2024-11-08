document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    acceptCookiesButton.addEventListener('click', function() {
        cookieConsent.style.display = 'none';
    });

    setTimeout(function() {
        cookieConsent.style.display = 'none';
    }, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío real del formulario

        // Simula el envío del formulario
        alert('Formulario enviado correctamente');

        // Limpia los campos del formulario
        form.reset();
    });
});