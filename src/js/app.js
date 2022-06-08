document.addEventListener('DOMContentLoaded', function(){
    startApp();
});

function startApp(){
    pinupNav();
    buildGalery();
    scrollNav();
}
function pinupNav() {
    const bar = document.querySelector('.header');
    const fest = document.querySelector('.fest');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function() {
        if( fest.getBoundingClientRect().top < 0){
            bar.classList.add('pinup-bar');
            body.classList.add('body-scroll');
        } else {
            bar.classList.remove('pinup-bar');
            body.classList.remove('body-scroll');
        }
    });
}
function scrollNav() {
    const links = document.querySelectorAll('.menu a');
    links.forEach( link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const sectionScroll = e.target.attributes.href.value;
            const section = document.querySelector(sectionScroll);
            section.scrollIntoView({behavior: "smooth"});
        });
    });
}

function buildGalery(){
    const galery = document.querySelector('.galery-img');

    for(let i = 1; i<=12; i++ ){
        const image = document.createElement('picture');
        image.innerHTML = `
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.png" alt="Imagen galeria">
        `;

        image.onclick = function() {
            showImage(i);
        }
    
        galery.appendChild(image);
    }
}

function showImage(id){
    const image = document.createElement('picture');
        image.innerHTML = `
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.png" alt="Imagen galeria">
        `;

        const overlay = document.createElement('DIV');
        overlay.appendChild(image);
        overlay.classList.add('overlay');
        overlay.onclick = function() {
            const body = document.querySelector('body');
            body.classList.remove('pinup-body');
            overlay.remove();
        }

        const closeModal = document.createElement('P');
        closeModal.textContent = 'X';
        closeModal.classList.add('btn-close');
        closeModal.onclick = function() {
            const body = document.querySelector('body');
            body.classList.remove('pinup-body');
            overlay.remove();
        }
        overlay.appendChild(closeModal);

        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('pinup-body');
}