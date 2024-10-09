document.querySelector('#container').addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        console.log('You clicked on ' + e.target.innerText);
    }
});