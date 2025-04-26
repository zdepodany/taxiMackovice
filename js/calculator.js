function calculatePrice() {
    const distance = parseFloat(document.getElementById('distance').value) || 0;
    
    let pricePerKm;
    if (distance <= 10) {
        pricePerKm = 40;
    } else if (distance <= 20) {
        pricePerKm = 35;
    } else {
        pricePerKm = 30;
    }
    
    const basePrice = distance * pricePerKm;
    const totalPrice = basePrice + 50; // +50 Kč nástupné
    
    document.getElementById('price').textContent = totalPrice.toFixed(0);
}

// Přidání event listeneru pro tlačítko kalkulačky
document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.querySelector('.calculator-button');
    if (calculateButton) {
        calculateButton.addEventListener('click', calculatePrice);
    }
});

// Lazy loading obrázků
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img[loading='lazy']");
    
    if ("loading" in HTMLImageElement.prototype) {
        // Prohlížeč podporuje native lazy loading
        lazyImages.forEach(img => {
            img.addEventListener("load", function() {
                this.classList.add("loaded");
            });
        });
    } else {
        // Fallback pro starší prohlížeče
        const lazyLoadScript = document.createElement("script");
        lazyLoadScript.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
        document.body.appendChild(lazyLoadScript);
    }
});

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
