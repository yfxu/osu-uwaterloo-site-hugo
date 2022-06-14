var open = false;

function toggleMenu() {
    var buttons = document.getElementById("menu-buttons");
    open = !open;

    if (open) {
        buttons.style.left = "320px";
    } else {
        buttons.style.left = "0";
    }
}
