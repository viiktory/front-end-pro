const text = document.querySelector('#info-text');
const btn = document.querySelector('#info-btn');

let originColor =  getComputedStyle(text).color;

btn.addEventListener('click', function () {
    if (text.style.color === 'blue') {
        text.style.color = originColor;
    } else {
        text.style.color = 'blue';
    }
});

