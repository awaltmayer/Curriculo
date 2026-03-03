    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        hero.classList.add("shrink");
    } else {
        hero.classList.remove("shrink");
    }
    });