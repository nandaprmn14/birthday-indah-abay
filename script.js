function startLove() {
    document.getElementById("bgMusic").play();
    document.querySelector(".countdown").scrollIntoView({behavior: "smooth"});
}

const targetDate = new Date("January 24, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "Hari ini adalah harimu 🤍";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);

    document.getElementById("timer").innerHTML =
        `${days} Hari • ${hours} Jam • ${minutes} Menit`;
}, 1000);
