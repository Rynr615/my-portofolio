// Navigation Bar Function

function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

window.onscroll = function() {
    headerShadow()
};

function headerShadow() {

    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){ 
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

let typingEffect = new Typed(".typedText", {
    strings: ["Programmer", "Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
    loop: true,
})

const sr = ScrollReveal({
    origin : 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay:100})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-text-btn',{delay:200})
sr.reveal('.social-icons',{delay:200})
sr.reveal('.featured-image',{delay:300})
sr.reveal('.project-box',{interval:200})
sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
    origin : 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info',{delay:100})
srLeft.reveal('.contact-info',{delay:100})

const srRight = ScrollReveal({
    origin : 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box',{delay:100})
srRight.reveal('.form-control',{delay:100})

function scrollActive() {
    const scrollY = window.scrollY;

    const sections = document.querySelectorAll('section');

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// download cv
document.querySelectorAll('.downloadCVBtn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        // Membuka tab baru untuk menangani unduhan
        const newTab = window.open('./assets/cv/ryanyanuarpradana_cv.pdf', '_blank');
        newTab.focus();

        // Memulai unduhan di tab baru
        newTab.addEventListener('load', function() {
            setTimeout(() => {
                newTab.location.href = './assets/cv/ryanyanuarpradana_cv.pdf';
                newTab.close();
            }, 500);
        });
    });
});