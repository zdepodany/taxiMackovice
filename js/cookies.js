// Cookie management
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');
    const cookieDecline = document.getElementById('cookie-decline');

    // Zkontroluj, zda uživatel již dal souhlas
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        cookieBanner.classList.add('hidden');
        initializeGoogleAnalytics();
    } else if (localStorage.getItem('cookieConsent') === 'declined') {
        cookieBanner.classList.add('hidden');
    }

    // Zpracování souhlasu
    cookieAccept.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.add('hidden');
        initializeGoogleAnalytics();
    });

    // Zpracování odmítnutí
    cookieDecline.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        cookieBanner.classList.add('hidden');
        // Zastavíme Google Analytics
        window['ga-disable-G-B8JTP4HJGK'] = true;
    });
});

// Inicializace Google Analytics pouze po souhlasu
function initializeGoogleAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-B8JTP4HJGK', {
        'stream_id': '10585988553'
    });
} 