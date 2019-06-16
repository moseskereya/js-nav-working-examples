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