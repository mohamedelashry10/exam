
/************************************ Start Registeration  ***********************************/ 

/********************** Start  Login / Sign Up  Hidden / show *************************/

//console.log (document.getElementsByClassName("register")[0].children[0].children[0].children[1]) //<span>signUp<span>
try {
document.getElementsByClassName("register")[0].children[0].children[0].children[1].onclick = function(){
   this.parentElement.nextElementSibling.style="display:block";
   this.parentElement.nextElementSibling.nextElementSibling.style="display:none";

}

document.getElementsByClassName("register")[0].children[0].children[0].children[0].onclick = function (){
    this.parentElement.nextElementSibling.style="display:none";
    this.parentElement.nextElementSibling.nextElementSibling.style="display:block";
    
 }


/********************** End  Login / Sign Up  Hidden / show *************************/


/********************** Start show and hidden password ******************************/ 

 document.getElementsByClassName("pass")[0].onmouseover = function (){
    this.previousElementSibling.setAttribute("type","text")
 }
 document.getElementsByClassName("pass")[0].onmouseout = function (){
    this.previousElementSibling.setAttribute("type","password")
}

/********************** End show and hidden password ******************************/ 



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


function students (email , password , fullName , gender ,loca1){
   this.email        = email;
   this.password     = password;
   this.fullName     = fullName;
   this.gender       = gender;
}

// Empty array To Put inside it the Object Details Of Users
var arrStudent= [];

document.forms[0].elements[6].onclick = addToArray;

function addToArray()
{
   if (document.forms[0].elements[0].value == "" || document.forms[0].elements[1].value == "" ||
   document.forms[0].elements[2].value == "" || document.forms[0].elements[3].checked == false && document.forms[0].elements[4].checked == false)
   {
      alert ("PLZ Full Your Information");
   }
   else 
   {
      
      var foundedName = true;
      var s1 = new students(document.forms[0].elements[0].value , document.forms[0].elements[1].value , 
         document.forms[0].elements[2].value , document.forms[0].elements["gender"].value)   

      if (arrStudent.length == 0 )
      {
         arrStudent.push(s1);
         alert ("You Are Sign Up  Successfully");
         toResetFrom();
      }
      else if (arrStudent.length > 0)
      {
         for (var i = 0 ; i < arrStudent.length ; i++) 
         {
            if (arrStudent[i].fullName != document.forms[0].elements[2].value)
            {
               foundedName = false;
            }
         }
         for (var i = 0 ; i < arrStudent.length ; i++) 
         {
            if (arrStudent[i].fullName == document.forms[0].elements[2].value)
            {
               foundedName = true;
            }
         }
         if (foundedName == false)
         {
            arrStudent.push(s1);
            alert ("You Are Sign Up Successfully")
            toResetFrom();

         }else
         {
            alert (`Sorry The Full Name { ${document.forms[0].elements[2].value} } Is Founded PlZ Enter Another one`)
         }
         
      }
       console.log(arrStudent)
       localStorage.setItem("fullName" , JSON.stringify(arrStudent)) // To strore Array Of Objects In Local Storage

   }
}

// function to reset the input After Sign In 
function toResetFrom () 
{
   document.forms[0].elements[0].value = ""
   document.forms[0].elements[1].value = ""
   document.forms[0].elements[2].value = ""
   document.forms[0].elements[3].checked = false
   document.forms[0].elements[4].checked = false
}

/*************************************** End Registeration ***************************************** */   


/***************************************    Start LogIn      ************************************** */
document.forms[1].elements[2].onclick = logIn ;

function logIn()
{
   var foundUser = false;
   var storedName =JSON.parse(localStorage.getItem("fullName")) // array of object from local storage
   for (var i = 0 ; i < storedName.length ; i++)
   {
      if (storedName[i].fullName == document.forms[1].elements[0].value && storedName[i].password == document.forms[1].elements[1].value  ) 
      {
         foundUser = true ;
      }
   }
   if (foundUser == true)
   {
      alert(`Welcome ${ document.forms[1].elements[0].value}`);
      window.open("index.html");
     // document.getElementsByClassName("header")[0].children[0].children[0].children[0].children[0].style = "display:none";
   }else {
      alert ("sorry You Are Not Register")
   }
}


/// many validation in sign in 

/***************************************    End LogIn      ************************************** */
}
catch(e){
   console.log()
}
