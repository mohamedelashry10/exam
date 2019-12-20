
/************************************ Start Registeration  ***********************************/ 

/********************** Start  Login / Sign Up  Hidden / show *************************/

//console.log (document.getElementsByClassName("register")[0].children[0].children[0].children[1]) //<span>signUp<span>
try {
   // span =====> log Out
document.getElementsByClassName("register")[0].children[0].children[0].children[2].onclick = clickOnSignUp;

function clickOnSignUp(){
   this.parentElement.nextElementSibling.style="display:block";
   this.parentElement.nextElementSibling.nextElementSibling.style="display:none";

}
// span === > log In
document.getElementsByClassName("register")[0].children[0].children[0].children[1].onclick = clickOnLogIn;

function clickOnLogIn(){
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
         if (JSON.parse(localStorage.getItem(document.forms[0].elements[2].value)) == null){
         arrStudent.push(s1);
         localStorage.setItem(document.forms[0].elements[2].value , JSON.stringify(s1))
         alert ("You Are Sign Up  Successfully");
         toResetFrom();
         }
         else
         {
            alert(`This User Name { ${document.forms[0].elements[2].value} } Is Founded  PLZ Enter Another One`)
         }
      }
      else if (arrStudent.length > 0)
      {
        /* for (var i = 0 ; i < arrStudent.length ; i++) 
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
         } */
         if ( /*foundedName == false && */ JSON.parse(localStorage.getItem(document.forms[0].elements[2].value))== null )
         {
            arrStudent.push(s1);
            localStorage.setItem(document.forms[0].elements[2].value , JSON.stringify(s1))
            alert ("You Are Sign Up Successfully")
            toResetFrom();
            console.log(JSON.parse (localStorage.getItem(document.forms[0].elements[2].value)))
         }
         else
         {
            alert (`Sorry The Full Name { ${document.forms[0].elements[2].value} } Is Founded PlZ Enter Another one`)
         }
         
      }
       console.log(arrStudent)
      // localStorage.setItem("fullName" , JSON.stringify(arrStudent)) // To strore Array Of Objects In Local Storage

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

var userSession;

function logIn()
{
   var storedValue = JSON.parse(localStorage.getItem(document.forms[1].elements[0].value))
 //console.log(storedValue)
 if (document.forms[1].elements[0].value == "" || document.forms[1].elements[1].value == "") 
   {
    alert ("PLZ Full All Inputs")
   }
   else if (!storedValue)
   {
      alert("Sorry This Name Not Founded , You Must Sign Up Before Register ")
   }
   
 else if (document.forms[1].elements[0].value == storedValue.fullName && document.forms[1].elements[1].value == storedValue.password  )
   {
       if (document.forms[1].elements[0].value in sessionStorage )  // if you are in session storage 
      {
         alert ("You are already LogIn Before ");
         window.open("index.html","_SELF")
      }
      else
      {
         userSession = sessionStorage.setItem(document.forms[1].elements[0].value,document.forms[1].elements[1].value )
         alert (`Welcome {${document.forms[1].elements[0].value}} To Our Page`);
        // window.open("index.html")
            window.location.href = "index.html";

         //console.log(sessionStorage.getItem(document.forms[1].elements[0].value) )// get password 
      }
   }
   
   else 
   {
      alert (`Plz Check Your UserName && Password `) // like ===> if enter name ture and pass flase    
   }   
}    
/***************************************    End LogIn      ************************************** */

  
/***************************************    End Exam      ************************************** */


}
catch(e){
   console.log()
   }

   try {
      // here i will put Message beause there are not  session storage

   if (sessionStorage.length == 0)
   {
      document.getElementById("exam").children[0].innerHTML = `<div class='alert alert-danger text-center mt-5 mb-3' >
      Sorry You Must Be Login Before Do Exam </div>`;
      var createBtn = document.createElement("button")
      var linkToRegister = document.createElement("a")
      createBtn.setAttribute("class","btn btn-primary mt-3 ");
      linkToRegister.setAttribute("href","register.html "  );
      linkToRegister.setAttribute("style","color:white"  );
      
      linkToRegister.innerHTML = "Go To Register";
      createBtn.appendChild(linkToRegister);
      document.getElementById("exam").children[0].appendChild(createBtn)
      //window.open("register.html")
      console.log(document.getElementById("exam").children[0])
   }
   
   else{
      // here i will put the exam because there are session storage
      
      /*************************** start Exam**********************************/ 
      
               /***************** start timer *****************/
      
      var spanText = document.createElement("span");
      spanText.setAttribute("style", "color:red");
      spanText.setAttribute("class", "mb-5");
      spanText.innerHTML = " Timer Of Exam : ";
      document.getElementById("exam").children[0].appendChild(spanText);
      var spanTimer = document.createElement("span");
      document.getElementById("exam").children[0].appendChild(spanTimer);
      console.log(spanTimer) // span 
      var i = 180 ;
      var myTimer = setInterval(function(){
         spanTimer.innerHTML = i--;

         if (i === 0 )
         {
            clearInterval(myTimer)
         }

      } , 1000)

               /******************** End timer *************************/

               /******************** Start Question  ******************/

      var  divParent = document.getElementById("exam").children[0]  ;
     
      var creatediv1 = document.createElement("div");
         creatediv1.innerHTML  = "<h4> 1- Is 5 + 5 = 10 ? </h4>";
         creatediv1.innerHTML += `<input type = 'radio' name = 'sum' > True
                                  <input type = 'radio' name = 'sum' > False `;
         creatediv1.innerHTML += `<h5> Point From 5 </h5>`;                         
         console.log (divParent.appendChild(creatediv1));


         var creatediv2 = document.createElement("div");
         creatediv2.innerHTML  = "<h4> 1- Is 10 + 2 * 10   = 120 ? </h4>";
         creatediv2.innerHTML += `<input type = 'radio' name = 'multi' > True
                                  <input type = 'radio' name = 'multi' > False `;
         creatediv2.innerHTML += `<h5>  Point  From 5 </h5>`;                         
         console.log (divParent.appendChild(creatediv2))


         var creatediv3 = document.createElement("div");
         creatediv3.innerHTML  = "<h4> 1- Do You Love ITI ? </h4>";
         creatediv3.innerHTML += `<input type = 'radio' name = 'js' > True
                                  <input type = 'radio' name = 'js' > False `;
         creatediv3.innerHTML += `<h5>  Point  From 5 </h5>`;                         
         console.log (divParent.appendChild(creatediv3))

         
               /******************** End Question  ******************/

  
      /*************************** End Exam**********************************/ 
         
   }

   // if you found sessionStorage hidden the login Form
   
   } 
   catch(e)
  {
     console.log()
   }

try{
   if (sessionStorage.length != 0)
   {
      
      document.getElementsByClassName("register")[0].children[0].children[0].children[1].style="display:none"
     // document.getElementsByClassName("register")[0].children[0].children[0].childNodes[4].textContent = " "  // ||
     // to show Log Out
      document.getElementsByClassName("register")[0].children[0].children[0].children[0].style = "display:inline" 
   }
   else{

   }

   // to clear session storage

 document.getElementsByClassName("register")[0].children[0].children[0].children[0].onclick = function ()
 {
  var logOut =  confirm("Are Youe Sure ?")
   if ( logOut === true )
   {
      alert ("You Are Log Out Successfully");
      sessionStorage.clear();
      window.open("index.html","_SELF") 
 }
 else 
 {

 }
}

}
catch(e)
{

}

