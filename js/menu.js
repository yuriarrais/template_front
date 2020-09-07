var menu = document.querySelector("#menu");
var dropdowns = menu.getElementsByClassName('header-nav');

menu.addEventListener("click",function(event){
    let parent = event.target.parentNode.getElementsByClassName('header-nav')[0];
    if (parent) {
        if (!event.target.matches('#img-profile')){
            if (parent.classList.contains('dpdw-open')){
                parent.classList.remove('dpdw-open');
            }else{
                parent.classList.add('dpdw-open');
            };
        };
    }

    for (let j=0; j < dropdowns.length; j++){
        if (dropdowns[j] != parent){
            dropdowns[j].classList.remove('dpdw-open');
        }
    }
});

window.onclick = function(event) {
    if (!event.target.matches('.content-menu-button')) {
        for (let j=0; j < dropdowns.length; j++){
            dropdowns[j].classList.remove('dpdw-open');
        };
    };
};