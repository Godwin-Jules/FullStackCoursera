msg = function(){
    alert("Thank you for visiting our webpage !");
    // const input = document.querySelector("input");
    const value = document.querySelector('input').value;
    if(value != 'Click me'){
        alert('Ce n\'est pas Click me');
    } else {
        alert('C\'est vraiment Click me');
    }
}