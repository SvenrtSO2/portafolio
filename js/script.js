function setFavicon() {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = dark ? "img/light-theme.png" : "img/dark-theme.png";}
    setFavicon();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", setFavicon);

        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
            document.getElementById('clock').innerText = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();
