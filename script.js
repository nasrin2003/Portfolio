document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Create Snowfall Effect Container
    function startSnowfall() {
        for (let i = 0; i < 50; i++) {
            createSnowflake();
        }
    }

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄";
        document.body.appendChild(snowflake);

        const size = Math.random() * 8 + 5;
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;

        setTimeout(() => {
            snowflake.remove();
        }, 8000);
    }

    // Toggle Dark Mode
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            themeToggle.innerHTML = "☀️";
            localStorage.setItem("dark-mode", "enabled");
            startSnowfall();  // Start snowfall effect in dark mode
        } else {
            themeToggle.innerHTML = "🌙";
            localStorage.setItem("dark-mode", "disabled");
            clearEffects(); // Remove snowflakes
        }
    });

    function clearEffects() {
        document.querySelectorAll(".snowflake").forEach(el => el.remove());
    }

    // Load Dark Mode Preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        themeToggle.innerHTML = "☀️";
        startSnowfall();
    } else {
        themeToggle.innerHTML = "🌙";
    }
});
