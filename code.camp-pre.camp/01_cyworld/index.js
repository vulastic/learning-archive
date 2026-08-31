function initialize() {
    const innerframe = document.getElementById("innerframe");
    const items = document.getElementById("wrapper__navigation").querySelectorAll(".navigation__item");
    document.getElementById("navigation__home").addEventListener('click', (event) => {
        items.forEach(i => {
            i.classList.remove("navigation__selected");
        });
        event.currentTarget.classList.add("navigation__selected");
        innerframe.src = "./home.html";
    });
    document.getElementById("navigation__jukebox").addEventListener('click', (event) => {
        items.forEach(i => {
            i.classList.remove("navigation__selected");
        });
        event.currentTarget.classList.add("navigation__selected");
        innerframe.src = "./jukebox.html";
    });
    document.getElementById("navigation__game").addEventListener('click', (event) => {
        items.forEach(i => {
            i.classList.remove("navigation__selected");
        });
        event.currentTarget.classList.add("navigation__selected");
        innerframe.src = "./game.html";
    });
}

initialize();