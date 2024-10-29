// Manejo de la notificación de cookies
document.getElementById('acceptCookies').addEventListener('click', function() {
    const notice = document.getElementById('cookieNotice');
    notice.style.display = 'none';
});

setTimeout(() => {
    const notice = document.getElementById('cookieNotice');
    notice.style.display = 'none';
}, 5000); // Desaparece después de 5 segundos
