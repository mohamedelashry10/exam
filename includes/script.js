/************************************ Start Registeration  ***********************************/ 
console.log (document.getElementsByClassName("register")[0].children[0].children[0].children[1]) //<span>signUp<span>
document.getElementsByClassName("register")[0].children[0].children[0].children[1].onclick = function (){
   this.parentElement.nextElementSibling.style="display:block";
   this.parentElement.nextElementSibling.nextElementSibling.style="display:none";

}

document.getElementsByClassName("register")[0].children[0].children[0].children[0].onclick = function (){
    this.parentElement.nextElementSibling.style="display:none";
    this.parentElement.nextElementSibling.nextElementSibling.style="display:block";
    
 }


 // show and hidden password

 document.getElementsByClassName("pass")[0].previousElementSibling.onmouseover = function (){
    this.setAttribute("type","text")
 }
 document.getElementsByClassName("pass")[0].previousElementSibling.onmouseout = function (){
    this.setAttribute("type","password")
}

/************************************ End Registeration  ***********************************/ 