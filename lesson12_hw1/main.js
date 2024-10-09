let userLink = '';

document.querySelector('#enter-btn').addEventListener('click', (e) => {
    userLink = prompt('Enter the redirect link:', 'https://');

    const urlPattern = /^(http|https):\/\/[a-zA-Z0-9]+([\/][a-zA-Z0-9]*)*(\.[a-zA-Z0-9]+)+/;

    if (!urlPattern.test(userLink)) {
        alert('Invalid link! Try again');
        userLink = '';
    }
});
document.querySelector('#link-btn').addEventListener('click', (e) => {
    if (userLink) {
        location.href = userLink;
    }
});
