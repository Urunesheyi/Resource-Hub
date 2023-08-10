function effect(){
    var text = document.querySelector('.links');
    var a = text.getBoundingClientRect().top;
    var height = window.innerHeight / 1.7;

    if(a < height){
        text.classList.add('toggle');
    }
}

window.addEventListener('scroll', effect)