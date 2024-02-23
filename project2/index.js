// let answer = prompt('What is your name?');

function handleClick() {
    alert('This element has been clicked !');
}

if (typeof(answer) === 'string' && answer !== '') {
    const heading = document.createElement('h1');
    heading.innerText = "Bonjour, " + answer;
    heading.setAttribute('onclick', 'handleClick()');
    document.body.innerText = '';
    document.body.appendChild(heading);
}

let title = document.createElement('h2');
title.innerText = 'Type into the input to make this text change';

let typed = document.createElement('p');
typed.innerText = '';

answer = document.createElement('input');
answer.setAttribute('type', 'text');

document.body.appendChild(title);
document.body.appendChild(typed);
document.body.appendChild(answer);

answer.addEventListener('change', function() {
    let value = answer.value;
    const upper = value.toUpperCase();
    const lower = value.toLowerCase();
    value = upper.slice(0, 1) + lower.slice(1, value.length);
    typed.innerText = ' "' + value + '"';
});
