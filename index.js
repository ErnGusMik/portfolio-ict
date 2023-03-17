const updateGradient = () => {
    const gradientContainer = document.querySelector('#gradient-container');
    const heroHeight = document.querySelector('#hero').offsetHeight;
    const height = window.scrollY - heroHeight;
    if (height > 20 && height < 2500) {
        gradientContainer.style.transform = `matrix(1, 0, 0, 1, 0, -${height})`;
    } else {
        gradientContainer.style.transform = `matrix(1, 0, 0, 1, 0, 10)`;
    }
};

// add an event listener to the window object that calls the updateGradient function on scroll
window.addEventListener('scroll', updateGradient);
// add an event listener to the window object that calls the updateGradient function on resize
window.addEventListener('resize', updateGradient);
// call the updateGradient function once to set the initial state
updateGradient();

// const fadeTextOnScroll = (element) => {
//     const elementHeight = document.querySelector(element).offsetHeight;
//     const windowHeight = window.scrollY;
//     const elementRect = document.querySelector(element).getBoundingClientRect();
//     const elementTop = elementRect.top;
//     const elementBottom = elementRect.bottom;
//     const result = Math.max(0, elementTop > 0 ? Math.min(elementHeight, windowHeight - elementTop) : Math.min(elementBottom, windowHeight));
//     const opacity = result / 50;
//     console.log(opacity);
//     if (0 < opacity < 1) {
//         document.querySelector(element).style.opacity = opacity;
//     } else if (opacity > 1) {
//         document.querySelector(element).style.opacity = 1;
//     } else {
//         document.querySelector(element).style.opacity = 0;
//     }
// };

// // window.addEventListener('scroll', () => {
// //     fadeTextOnScroll('#text-fade');
// // });
// // window.addEventListener('resize', () => {
// //     fadeTextOnScroll('#text-fade');
// // });
// // fadeTextOnScroll('#text-fade');

const getScrollPercent = (element) => {
    const windowBottom = window.scrollY + document.body.clientHeight;
    let elementTop = document.querySelector(element).offsetTop;
    const percentage = (windowBottom - elementTop) / document.querySelector(element).clientHeight * 100;
    if (percentage > 100) {
        return 100;
    } else if (percentage < 0) {
        return 0;
    } else {
        return Math.round(percentage);
    }
}


window.addEventListener('scroll', () => {
    const percent = getScrollPercent('#colors')
    if (percent > 70) {
        document.querySelector('#colors-gallery-1').style.display = 'none';
        document.querySelector('#colors-gallery-2').style.display = 'inline-block';
        document.querySelector('#label-gold').classList.remove('active');
        document.querySelector('#label-black').classList.add('active');
    } else {
        document.querySelector('#colors-gallery-1').style.display = 'inline-block';
        document.querySelector('#colors-gallery-2').style.display = 'none';
        document.querySelector('#label-gold').classList.add('active');
        document.querySelector('#label-black').classList.remove('active');
    }
});

const fadeElementOnScroll = (element) => {
    const percent = getScrollPercent(element);
    if (percent > 20) {
        document.querySelector(element).style.opacity = 0;
    }
    document.querySelector(element).style.opacity = percent / 100;
}

window.addEventListener('scroll', () => {
    fadeElementOnScroll('#colors-desc')
    fadeElementOnScroll('#chip-desc-fade')
    fadeElementOnScroll('#battery-desc-grid')
});

window.addEventListener('scroll', () => {
    const scroll = getScrollPercent('#chip-move-container');
    const img = document.querySelector('#chip-image');
    if (scroll < 49) {
        img.style.transform = `translateX(105%)`;
        return
    }
    img.style.transform = `translateX(${(100 - scroll) * 2}%)`;
});

const graphFadeOnScroll = (element, className) => {
    const observer = new IntersectionObserver(elem => {
        elem.forEach(ele => {
            if (ele.isIntersecting) {
                ele.target.classList.add(className);
            }
        })
    })
    observer.observe(element);
}

graphFadeOnScroll(document.querySelector('#chip-bar-new'), 'chip-bar-anim');
graphFadeOnScroll(document.querySelector('#chip-bar-old'), 'chip-bar-anim');
graphFadeOnScroll(document.querySelector('#chip-num'), 'chip-num-active');

graphFadeOnScroll(document.querySelector('#battery-backg-1'), 'battery-backg-active');
graphFadeOnScroll(document.querySelector('#battery-backg-2'), 'battery-backg-2-active');
