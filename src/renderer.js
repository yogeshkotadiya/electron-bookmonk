const link = document.getElementById('new-link-url');
const linkSubmit = document.getElementsByClassName('new-link-form--submit');
const linkForm = document.getElementsByClassName('new-link-form');

link.addEventListener('keyup', () => {
    linkSubmit.disabled = !link.validity.valid;
});

const parser = DOMParser();
const parseRes = text => parser.parseFromString(text, 'text/html');
const getTitle = nodes => nodes.querySelector('title').innerText;

linkForm.addEventListener('submit', () => {
    event.preventDefault();

    const url = link.value;

    fetch(url)
        .then(res => res.text())
        .then(parseRes)
        .then(getTitle)
        .catch(err => console.log(err));
});