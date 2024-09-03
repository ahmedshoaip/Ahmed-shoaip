let div=document.querySelector('.color');
let btn=document.getElementById("btn");
let colors=['red','green','pink'];
let i=0;
btn.onclick=function(){
    div.style.background=colors[i];
    i++;
    if(i==3){
        i=0;
    }
    div.style.border='none';

}