let lang = document.querySelector('#language');
let arabic = document.querySelector('#arabic');
function changeDirection(){
    if(arabic.innerHTML == 'AR'){
      lang.setAttribute('dir','rtl');
      arabic.innerHTML = 'EN';
    }
    else {
        lang.setAttribute('dir','ltr');
        arabic.innerHTML = 'AR';
    }
}