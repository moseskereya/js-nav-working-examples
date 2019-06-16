var menuStatus = 1;
 
function myFunction1(){
    if(menuStatus == 1){
document.querySelector('.menu').style.left = '-275px';
  menuStatus = 0;

    }else if (menuStatus == 0) {
        document.querySelector('.menu').style.left = '0';
        menuStatus = 1; 
    }
}
function myFunction(){
    alert('hello you cliced me')
    var myFunction = prompt('what are you looking for')
    if(myFunction === ''){
        alert('please fill the blank')
    }else{
        alert('ok perfect! get what you want from us')
    }
}