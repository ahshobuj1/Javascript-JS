const slideClass = document.querySelectorAll('.slide-item');
console.log(slideClass.length);

let count = 1;
setInterval(() => {
    count++;
    let presentElement = document.querySelector('.present');

    presentElement.classList.remove('present');

    if (count > slideClass.length) {
        slideClass[0].classList.add('present');
        count = 1;
    } else {
        presentElement.nextElementSibling.classList.add('present');
    }
}, 2000);
