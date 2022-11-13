const btnSummary = document.querySelector('.Summary');
const sectionSummary = document.querySelector('#Summary');
    btnSummary.addEventListener('click', function() {
    sectionSummary.scrollIntoView({behavior: "smooth", block:"center"})
});

const btnSkills = document.querySelector('.Skills');
const sectionSkills = document.querySelector('#Skills');
    btnSkills.addEventListener('click', function() {
    sectionSkills.scrollIntoView({behavior: "smooth", block:"center"})
});

const btnConstellations = document.querySelector('.Constellations');
const sectionConstellations = document.querySelector('#Constellations');
    btnConstellations.addEventListener('click', function() {
    sectionConstellations.scrollIntoView({behavior: "smooth", block:"center"})
});

const btnWeapon = document.querySelector('.Weapon');
const sectionWeapon = document.querySelector('#Weapon');
    btnWeapon.addEventListener('click', function() {
    sectionWeapon.scrollIntoView({behavior: "smooth", block:"center"})
});

const btnArtifacts = document.querySelector('.Artifacts');
const sectionArtifacts = document.querySelector('#Artifacts');
    btnArtifacts.addEventListener('click', function() {
    sectionArtifacts.scrollIntoView({behavior: "smooth", block:"center"})
});

const btnParty = document.querySelector('.Party');
const sectionParty = document.querySelector('#Party');
    btnParty.addEventListener('click', function() {
    sectionParty.scrollIntoView({behavior: "smooth", block:"center"})
});

// 위는 메뉴에 대한 스크립트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const arrowUp = document.querySelector('.arrow-up');
arrowUp.addEventListener('click', function() {
    sectionSummary.scrollIntoView({behavior: "smooth", block:"center"})
})

document.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        arrowUp.classList.add('show');
    } else {
        arrowUp.classList.remove('show');
    }
});

// 위는 화살표에 대한 스크립트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const ifrm = document.getElementById("youtube");

function c() {
    ifrm.src = "https://www.youtube.com/embed/Ot1d7g5Q-hE?rel=0";
}
function c2() {
    ifrm.src = "";
}

const openButton = document.getElementById('open');
const modal = document.querySelector('.Crt_modal');
const overlay = modal.querySelector('.modal_overlay');
const closeBtn = modal.querySelector('.button');
const iframe = modal.querySelector('iframe');
const openModal = () => {
    modal.classList.remove('Crt_hidden');
}
const closeModal = () => {
    modal.classList.add('Crt_hidden');
}
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
openButton.addEventListener('click', openModal);

// 위는 동영상에 대한 스크립트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

gsap.to(".video-banner-img", {duration: 0.7, y: 30, repeat: 200, yoyo: true});

const fadeEls = document.querySelectorAll('.Crt_XP');
        fadeEls.forEach(function (fadeEl, index) {
            gsap.to(fadeEl, {
                duration: 1,
                delay: (index + 1) * 1,
                opacity: 1,
            })
        })

// 위는 개요에 대한 스크립트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const spyEls = document.querySelectorAll(".Weapon_area");
        const controller = new ScrollMagic.Controller();

        spyEls.forEach(function (spyEl) {
            new ScrollMagic.Scene({
            triggerElement: spyEl,
            // triggerHook: 0.2
            })
            .setClassToggle(spyEl, "Weapon_show")
            .addTo(controller);
        });

// 위는 무기에 대한 스크립트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

gsap.to(".Artifacts_area", {duration: 0.8, y: 20, repeat: 200, yoyo: true});

// 위는 성유물에 대한 스크립트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 4,
    autoplay: true,
    speed: 1000,
    loop: true,
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: 0,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});

// 위는 파티에 대한 스크립트~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~