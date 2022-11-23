const btn = document.querySelector('.burger-menu')
btn.addEventListener('click', mobileMenu)

function mobileMenu() {
    let x = document.querySelector(".menu_hidden");
    console.log(x)
    if (x.style.height === "auto") {
        x.style.height = 0;
    } else {
        x.style.height = "auto";
    }
}

