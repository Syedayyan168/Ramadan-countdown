let countdownInterval;

function startCountdown(targetDate) {
    clearInterval(countdownInterval);  

    const countdownContainer = document.getElementById("countdownContainer");
    const buttonContainer = document.getElementById("buttonContainer");
    const clearButton = document.getElementById("clearButton");

    buttonContainer.classList.add("hidden");
    countdownContainer.classList.add("show");
    countdownContainer.classList.remove("hide");

    
    clearButton.style.display = "inline-block";

    const targetTime = new Date(targetDate).getTime();

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetTime - now;

        if (difference < 0) {
            clearInterval(countdownInterval);
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    }, 1000);
}

function clearCountdown() {
    clearInterval(countdownInterval);

    
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";

    const countdownContainer = document.getElementById("countdownContainer");
    const buttonContainer = document.getElementById("buttonContainer");
    const clearButton = document.getElementById("clearButton");

    countdownContainer.classList.remove("show");
    countdownContainer.classList.add("hide");

    buttonContainer.classList.remove("hidden");

    clearButton.style.display = "none";
}
