const target = document.querySelector('body');
const heading = document.querySelector('h1');

function handleClick() {
    console.log('The body has been clicked !');
    alert('The body is clicked');
}

function headingClicked() {
    console.log('The heading has been clicked !');
    alert('The heading title is clicked');
}

function bodyClicked() {
    console.log('Handling click using HTML element');
    alert('Handling clicking using HMTL element');
}

target.addEventListener('click', handleClick);
heading.addEventListener('click', headingClicked);