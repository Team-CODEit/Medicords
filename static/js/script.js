window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("scrolled", window.scrollY > window.innerHeight - 70)
})

console.log(window.innerHeight)