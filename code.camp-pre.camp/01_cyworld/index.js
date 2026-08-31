function initialize() {
    const innerframe = document.getElementById("innerframe");
    const items = document.getElementById("wrapper__navigation").querySelectorAll(".navigation__item");

    items.forEach(item => {
        item.addEventListener("click", e => {
            items.forEach(i => {
                i.classList.remove("navigation__selected");
            });
            item.classList.add("navigation__selected");
            innerframe.src = item.dataset.page;
        });
    });
}

initialize();