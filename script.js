/* Top scroll button */
window.onscroll = () => {
    scrollFunction();
}

function scrollFunction() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

function topFunction() {
    scrollButton.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}





topFunction();

