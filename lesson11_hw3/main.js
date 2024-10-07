const imgToChange = document.querySelector('#imgToChange');
const btnGenerator = document.getElementById('btn-generator');

btnGenerator.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;

    imgToChange.src = `images/${randomNumber}.jpg`;
});