const targetDate = new Date("August 1, 2026 15:30:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.innerText = String(Math.max(0, days)).padStart(2, '0');
    if (hoursEl) hoursEl.innerText = String(Math.max(0, hours)).padStart(2, '0');
    if (minutesEl) minutesEl.innerText = String(Math.max(0, minutes)).padStart(2, '0');
    if (secondsEl) secondsEl.innerText = String(Math.max(0, seconds)).padStart(2, '0');

    if (distance < 0) {
        clearInterval(timer);
        const container = document.getElementById("countdown-container");
        if (container) {
            container.innerHTML = "<h2 class='started-msg'>O Evento Começou!</h2>";
        }
    }
}, 1000);
