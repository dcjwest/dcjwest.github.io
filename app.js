const header = document.querySelector("header");
const navBar = header.querySelector(".nav-bar");
const navLinks = [...navBar.querySelectorAll("a")];
const menuBtn = header.querySelector("#menu-btn");
const main = document.querySelector("main");
const projects = [...main.querySelectorAll(".project")];
const overlay = document.querySelector("#modal-overlay");
const modal = main.querySelector("#modal");
const modalTitle = modal.querySelector("#modal-title");
const modalImage = modal.querySelector("#modal-image");
const modalDesc = modal.querySelector("#modal-desc");
const modalDemoBtn = modal.querySelector("#modal-demo");
const modalCodeBtn = modal.querySelector("#modal-code");
const closeModalBtn = modal.querySelector("#close-btn");
const slides = [...document.querySelectorAll(".slider img")];
let currSlideIndex, nextSlideIndex = 0;

const toggleMenu = () => {
    menuBtn.classList.toggle("active");
    navBar.classList.toggle("open");

    if (navBar.classList.contains("open")) {
        navLinks.forEach(link => link.addEventListener("click", toggleMenu));
    }
    else {
        navLinks.forEach(link => link.removeEventListener("click", toggleMenu));
    }
}

const toggleModal = (event) => {
    modal.classList.toggle("show");
    overlay.classList.toggle("show");

    if (modal.classList.contains("show")) {
        let currentProject = event.target.classList.contains("project")? event.target : event.target.parentNode;

        modalTitle.innerHTML = currentProject.dataset.name;
        modalImage.src = currentProject.dataset.image_src;
        modalDesc.innerHTML = currentProject.dataset.desc;
        modalDemoBtn.href = currentProject.dataset.url;

        overlay.addEventListener("click", toggleModal);
        closeModalBtn.addEventListener("click", toggleModal);
    }
    else {
        overlay.removeEventListener("click", toggleModal);
        closeModalBtn.removeEventListener("click", toggleModal);
    }
}

const switchSlide = () => {
    currSlideIndex = nextSlideIndex;
    slides[currSlideIndex].classList.remove("show-slide");
    nextSlideIndex = currSlideIndex < slides.length - 1? currSlideIndex + 1 : 0;
    slides[nextSlideIndex].classList.add("show-slide");
}

window.onload = () => {
    window.scrollTo(0, 0);
    setInterval(switchSlide, 4000);
}

window.onscroll = () => {
    window.scrollY > 500 ? (
        header.classList.add("show-header")
    ) : (
        header.classList.remove("show-header")
    );
}

menuBtn.addEventListener("click", toggleMenu);
projects.forEach(project => project.addEventListener("click", toggleModal));
