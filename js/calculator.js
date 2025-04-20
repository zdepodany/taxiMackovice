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
