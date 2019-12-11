window.onload = function () {
/************************************ Start Registeration  ***********************************/ 
//console.log (document.getElementsByClassName("register")[0].children[0].children[0].children[1]) //<span>signUp<span>
document.getElementsByClassName("register")[0].children[0].children[0].children[1].onclick = function(){
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


// validation of Register Form 
function validate(){
   if (document.forms[0].elements[0].value == "" || document.forms[0].elements[1].value == "" ||
   document.forms[0].elements[2].value == "" || document.forms[0].elements[3].checked == false)
   {
      alert ("PLZ Full Your Information");
   }
}
// Value of input Of Registeration
var userEmail     = document.forms[0].elements[0].value;
var userPassword  = document.forms[0].elements[1].value;
var userFullName  = document.forms[0].elements[2].value;
var userGender    = document.forms[0].elements[3].value;
function students (fullName , password , email , gender ){
   this.name      = fullName;
   this.password  = password;
   this.email     = email;
   this.gender    = gender;
}

var arrStudent= [];

//console.log (document.forms[0].elements[6]); // input submit
document.forms[0].elements[6].onclick = addToObject;

function addToObject(){
   if (document.forms[0].elements[0].value == "" || document.forms[0].elements[1].value == "" ||
   document.forms[0].elements[2].value == "" || document.forms[0].elements[3].checked == false && document.forms[0].elements[4].checked == false)
   {
      alert ("PLZ Full Your Information");
   }
   else {
      
      var storedName =  localStorage.setItem("fullName",document.forms[0].elements[2].value);
      var s1 = new students(document.forms[0].elements[0].value , document.forms[0].elements[1].value , 
      document.forms[0].elements[2].value , document.forms[0].elements[3].value)
      var theDiv = document.createElement("div");
      //theDiv.innerHTML =  "You Are Sign Up Successfully";
      //theDiv.setAttribute("class","alert alert-success text-center")
      //console.log(theDiv)
      //this.parentElement.appendChild(theDiv);  
      document.forms[0].elements[0].value = ""
      document.forms[0].elements[1].value = ""
      document.forms[0].elements[2].value = ""
      document.forms[0].elements[3].checked = false
      document.forms[0].elements[4].checked = false
      console.log(s1)
      
     // console.log(arrStudent[0].fullName)
      arrStudent.push(s1)

}
console.log(arrStudent)

//var s1 = new students(userEmail , userPassword , userFullName , userGender)

//console.log(s1)
/************************************ End Registeration  ***********************************/ 
}
}
