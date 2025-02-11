window.scrollTo({ top: 0, behavior: "smooth" });
// for navbar
window.addEventListener('scroll', () => {
    const navBar = document.querySelector('#navbar');
    const logoText = document.querySelector('.logo');
    const active = document.querySelector('.active');
    const navMenu = document.querySelector('#nav-ul');
    const menuBar = document.querySelector('.ham_burger');

    if (window.scrollY > 200) {
        navBar.classList.add('nav_bar');
        logoText.style.color = 'black';
        active.style.color = '#1089ff';
        menuBar.style.color = 'black';

        if (window.innerWidth < 990) {
            navMenu.style.background = 'white';
        } else {
            navMenu.style.background = 'transparent';
        }
    }
    else {
        navBar.classList.remove('nav_bar');
        logoText.style.color = 'white';
        active.style.color = '#00c951';
        menuBar.style.color = '#ffffffa8';

        if (window.innerWidth < 990) {
            navMenu.style.background = 'black';
        } else {
            navMenu.style.background = 'transparent';
        }
    }
});

window.addEventListener('resize', () => {
    const navMenu = document.querySelector('#nav-ul');
    if (window.innerWidth >= 1024) {
        navMenu.style.background = 'transparent';
    } else {
        navMenu.style.background = 'black';
    }
});


// for menu bar
const menu = document.querySelector('.ham_burger i');
const navMenu = document.querySelector('#nav-ul');

let isMenu = false;
menu.addEventListener('click', () => {
    if (!isMenu) {
        navMenu.style.top = '80px';
        menu.classList.remove('ri-menu-fold-3-line');
        menu.classList.add('ri-close-fill');
        isMenu = true;
        navMenu.style.scrollBehvior = "smooth";
    }
    else {
        navMenu.style.top = '-800px';
        menu.classList.remove('ri-close-fill');
        menu.classList.add('ri-menu-fold-3-line');
        navMenu.style.scrollBehvior = "smooth";
        isMenu = false;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.querySelector('.video_icon');
    const palyVideo = document.querySelector('.video_box');
    const closeVideo = document.querySelector('.close');

    playButton.addEventListener("click", () => {
        palyVideo.classList.toggle('video_box');
        palyVideo.classList.toggle('mp4');
    });

    closeVideo.addEventListener("click", () => {
        palyVideo.classList.toggle('mp4');
        palyVideo.classList.toggle('video_box');
    });
});

// for input date

document.addEventListener("DOMContentLoaded", () => {
    const pickInput = document.querySelector('.pick-input');
    const realInput = document.querySelector('.pick_real-input');
    const dropInput = document.querySelector('.drop-input');
    const realDrop = document.querySelector('.drop_real-input');
    const timeInput = document.querySelector('.time-input');
    const setTime = document.querySelector('.time_real-input');

    if (pickInput && realInput) {
        pickInput.addEventListener('click', () => {
            realInput.showPicker();
        });

        realInput.addEventListener('change', () => {
            pickInput.value = realInput.value;
        });
    }

    if (dropInput && realDrop) {
        dropInput.addEventListener('click', () => {
            realDrop.showPicker();
        });

        realDrop.addEventListener('change', () => {
            dropInput.value = realDrop.value;
        });
    }

    if (timeInput && setTime) {
        timeInput.addEventListener('click', () => {
            setTime.showPicker();
        });

        setTime.addEventListener('change', () => {
            timeInput.value = setTime.value;
        });
    }
});


// for car slider swiper

document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 10 }, // Mobile screens
            768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet screens
            1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
        }
    });
});


// experience counter

document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let h2 = entry.target;
                let target = parseInt(h2.textContent.replace(/,/g, ""));
                let count = 0;

                if (target < 100) {
                    let step = 1;
                    let interval = setInterval(() => {
                        count += step;
                        if (count >= target) {
                            clearInterval(interval);
                            h2.textContent = target.toLocaleString();
                        } else {
                            h2.textContent = count.toLocaleString();
                        }
                    }, 30);
                }
                else {
                    let duration = 2000;
                    let frameRate = 30;
                    let totalSteps = (duration / 1000) * frameRate;
                    let step = Math.ceil(target / totalSteps);

                    let interval = setInterval(() => {
                        count += step;
                        if (count >= target) {
                            clearInterval(interval);
                            h2.textContent = target.toLocaleString();
                        } else {
                            h2.textContent = count.toLocaleString();
                        }
                    }, 1000 / frameRate);
                }
                observer.unobserve(h2);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".count").forEach(h2 => {
        observer.observe(h2);
    });
});

// for blog

document.addEventListener("DOMContentLoaded", function () {

    const blogButton = document.querySelectorAll('.blog_btn');

    blogButton.forEach((e) => {
        e.addEventListener('click', () => {
            window.location.href = '/blog/blog.html';
        });
    });

});

// for about page
document.addEventListener("DOMContentLoaded", function () {
    const homePage = document.querySelector(".home");

    if (homePage) {
        homePage.addEventListener("click", () => {
            window.location.href = '/index.html';
        });
    } else {
        console.error("Element with class .home not found!");
    }
});

// for pricing page

const priceBox = document.querySelectorAll('.price');

priceBox.forEach((e) => {

    const priceButton = e.querySelector('.pricing_btn');
    e.addEventListener('mouseover', () => {
        e.style.background = '#01d28e'
        priceButton.style.opacity = '1';
    });

    e.addEventListener('mouseout', () => {
        e.style.background = 'rgba(0, 0, 0, 0.05)';
        priceButton.style.opacity = '0';
    });

});

// car page

const bookButtons = document.querySelectorAll('.book_btn');

bookButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let formPath = window.location.pathname.includes("/car") ? "./form.html" : "car/form.html";
        window.location.href = formPath;
    });
});


const detailButton = document.querySelectorAll('.detail-btn');
detailButton.forEach((e) => {
    e.addEventListener('click', () => {
        let formPath = window.location.pathname.includes('/car') ? "./info.html" : "car/info.html";
        window.location.href = formPath;
    });
});

// animation 
const sr = ScrollReveal({
    distance: '80px',
    duration: 1500,
    origin: 'bottom',
    delay: 200,
    easing: 'ease',
    reset: true
});

sr.reveal(`.animate, .about_us`);

sr.reveal(`.animates-1, .animates-2, .animates-3`, {
    interval: 200,
    opacity: 0,
    delay: 300,
    distance: '20px'
});

sr.reveal(`.home`, {
    interval: 1000,
    opacity: 0,
    origin: 'left'
});

sr.reveal(`.about, .service, .pri, .caarr, .blg`, {
    interval: 1000,
    opacity: 0,
    origin: 'right'
});
sr.reveal(`.animate_1, .animate_2, .animate_3`, {
    interval: 500,
    opacity: 0,
    origin: 'bottom',
    distance: '50px',
    delay: 500
});

