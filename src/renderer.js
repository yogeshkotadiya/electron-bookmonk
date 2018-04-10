const link = document.getElementById('new-link-url');
const linkSubmit = document.getElementsByClassName('new-link-form--submit');
const linkForm = document.getElementsByClassName('new-link-form');
const linkTemplate = document.getElementsById('link-template');

link.addEventListener('keyup', () => {
    linkSubmit.disabled = !link.validity.valid;
});

const parser = DOMParser();
const parseRes = text => parser.parseFromString(text, 'text/html');
const getTitle = nodes => nodes.querySelector('title').innerText;

const addToPage = ({ title, url}) => {
    const newlink = linkTemplate.content.cloneNode(true);

};

linkForm.addEventListener('submit', () => {
    event.preventDefault();

    const url = link.value;

    fetch(url)
        .then(res => res.text())
        .then(parseRes)
        .then(getTitle)
        .catch(err => console.log(err));
});