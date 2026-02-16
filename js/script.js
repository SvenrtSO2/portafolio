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


    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.getElementById("sidebarToggle");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("expanded");
    });

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("#about, #services, #experience, #contact");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActive() {

        let current = "";

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            current = "contact";
        } else {

            let middle = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {

                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (middle >= top && middle < bottom) {
                    current = section.id;
                }

            });
        }

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActive);
    window.addEventListener("load", updateActive);

});
