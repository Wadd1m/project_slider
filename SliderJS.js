let images = [{
    sectionCity: 'Rostov on Don <br> LCD admiral',
    sectionArea: '81 m2',
    sectionTime: '3.5 months',
    linkCities: 'Rostov-on-Don, Admiral',
    sectionCost: 'Upon request',
    url: './image1.png'
},
{
    sectionCity: 'Sochi <br> Thieves',
    sectionArea: '105 m2',
    sectionTime: '4 months',
    linkCities: 'Sochi Thieves',
    sectionCost: 'Upon request',
    url: './image2.png'
},
{
    sectionCity: 'Rostov on Don <br> Patriotic',
    sectionArea: '93 m2',
    sectionTime: '3 months',
    linkCities: 'Rostov-on-Don Patriotic',
    sectionCost: 'Upon request',
    url: './image3.png'
}];

function initSlider() {
    if (!images || !images.length) return;

    const sliderWrapper = document.querySelector(".section__slider");
    const sliderImages = sliderWrapper.querySelector(".slider-images");
    const sliderArrows = sliderWrapper.querySelector(".navigation");
    const navigationDots = sliderWrapper.querySelector(".navigation-circle");
    const sectionCity = sliderWrapper.querySelector('.section-city');
    const sectionArea = sliderWrapper.querySelector('.section-area');
    const sectionTime = sliderWrapper.querySelector('.section-time');
    const sectionCost = sliderWrapper.querySelector('.section-cost');
    const linkCities = sliderWrapper.querySelector(".section__slider-right_part-cities");

    initImages();
    initArrows();
    initDots();
    initCities();
    initAreas();
    initTimes();
    initCost();
    initLinks();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}"
style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }

    function initArrows() {
        sliderArrows.querySelectorAll(".navigation-arrow").forEach(arrow => {
            arrow.addEventListener("click", function () {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="navigation-circle-item n${index} ${index === 0 ? "active" : ""}" 
    data-index="${index}"></div>`;
            navigationDots.innerHTML += dot;
        });
        navigationDots.querySelectorAll(".navigation-circle-item").forEach(dot => {
            dot.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            })
        })
    }

    function initLinks() {
        images.forEach((image, index) => {
            let link = `<a class="title-one uppercase slider_item_a n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].linkCities}</a>`;
            linkCities.innerHTML += link;
        });
        function changeLinks(num) {
            if (!images[num].linkCities) return;
            let sliderCities = linkCities.querySelector(".slider_item_a");
            sliderCities.innerText = images[num].linkCities;
        }
        linkCities.querySelectorAll(".slider_item_a").forEach(link => {
            link.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            })
        })
    }


    function initCities() {
        let cityDiv = `<div class="description_store description_slider_two change-city">${images[0].sectionCity}</div>`;
        sectionCity.innerHTML += cityDiv;
    }
    function changeCities(num) {
        if (!images[num].sectionCity) return;
        let sliderCities = sectionCity.querySelector(".change-city");
        sliderCities.innerHTML = images[num].sectionCity;
    }

    function initAreas() {
        let areaDiv = `<div class="description_store description_slider_two change-area">${images[0].sectionArea}</div>`;
        sectionArea.innerHTML += areaDiv;
    }
    function changeAreas(num) {
        if (!images[num].sectionArea) return;
        let sliderAreas = sectionArea.querySelector(".change-area");
        sliderAreas.innerText = images[num].sectionArea;
    }

    function initTimes() {
        let timeDiv = `<div class="description_store description_slider_two change-time">${images[0].sectionTime}</div>`;
        sectionTime.innerHTML += timeDiv;
    }
    function changeTimes(num) {
        if (!images[num].sectionTime) return;
        let sliderTimes = sectionTime.querySelector(".change-time");
        sliderTimes.innerText = images[num].sectionTime;
    }

    function initCost() {
        let timeDiv = `<div class="description_store description_slider_two change-time">${images[0].sectionCost}</div>`;
        sectionCost.innerHTML += timeDiv;
    }
    function changeTimes(num) {
        if (!images[num].sectionCost) return;
        let sliderTimes = sectionCost.querySelector(".change-time");
        sliderTimes.innerText = images[num].sectionCost;
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        navigationDots.querySelector(".active").classList.remove("active");
        navigationDots.querySelector(".n" + num).classList.add("active");
        changeCities(num);
        changeAreas(num);
        changeTimes(num);
        linkCities.querySelector(".active").classList.remove("active");
        linkCities.querySelector(".n" + num).classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", initSlider);