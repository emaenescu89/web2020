// Login


const loginForm = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
loginForm.addEventListener('submit',(event) => {
    if (validate()) { // if validate() is done correctly then will do the login().
        login();
    } else { // if validate() it's not done we prevent the doc to do his action.
        event.preventDefault();
    }
});

const registerForm = document.getElementById('register-form'); 
const fName = document.getElementById('fName');                      
const lName = document.getElementById('lName');                      
const bDay = document.getElementById('bDay');                        
const regEmail = document.getElementById('register-email');          
const regPassword = document.getElementById('register-password');    
const regPasswordCheck = document.getElementById('passwordCheck');  

registerForm.addEventListener('submit',(event) => {
    if (register()) { 
    } else {
        event.preventDefault();
    }
});

function validate(){
    let emailValue = email.value.trim();// getting the value typed on email input. trim() dose not allow space inside input
    let passValue = password.value.trim(); 
    if(!emailValue){ // check if email is not empty
        setErrorFor(email,'Email can not be blank');
        return false;
    } else if (!isEmail(emailValue)){ // check if email format is good.
        setErrorFor(email,'Email not valid!');
        return false;
    } else {
        setSuccsessFor(email);
    }
    if(!passValue){ // check if password is not empty
        setErrorFor(password,'Password can not be blank');
        return false;
    } else if (passValue.length <= 7){ // check if password is min 7 chr long
        setErrorFor(password,'Password min 7 characters long + one number');
        return false;
    } else if (passValue.search(/[0-9]/) == -1) { // check if password has at least one number
        setErrorFor(password,'Password must contain at least one number');
        return false;
    } else {
        setSuccsessFor(password);
        return true;
    }
}
function setErrorFor(input,message){
    let formControl = input.parentElement // getting div with class  .form-control
    let small = formControl.querySelector('small'); // <small> html tag 
        small.innerHTML = message; // add error message inside <small> tag
        formControl.className = 'form-control error'; // adding the error class   
}

function openCity(evt, cityName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

let setSuccsessFor = (input) =>{ // Arrow function
  let formControl = input.parentElement // getting the div with class  .form-control
  formControl.className = 'form-control succsess'; // adding the succsess class
};
// check if email is correct format. Arrow function.
let isEmail = (email) => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

  //Creati global un array cu 3 useri, fiecare din ei avand proprietatile:
  let users = [{
   active: false,
   firstName: 'Dave',
   lastName: 'Henderson',
   password: 'parola1234',
   userName: 'dave@google.com',
},
{
   active: false,
   firstName: 'Mike',
   lastName: 'Goodman',
   password: 'miketheking24',
   userName: 'mike@google.com',
},
{
   active: false,
   firstName: 'Steve',
   lastName: 'Floyd',
   password: 'password15',
   userName: 'steve@google.com',    
}
];
// Creati o functie login care:
// sa verifice ca in lista exista user pentru email-ul si parola introdusa
// sa schimbe statusul de active al userului gasit
// sa redirecteze catre newsfeed
function login(){ 
    let emailValue = email.value.trim(); // getting the value that is typed in the email input
    let passValue = password.value.trim(); 
    let userFound = false; 
    for (let i = 0; i < users.length; i++){ 
        if ( emailValue == users[i].userName && passValue == users[i].password){ 
            // if email and password typed in input match the email and password from the 3 users list >
            users[i].active = true; // set the active status from false to true
            userFound = true; // set the var from false to true
            break; // stop the loop
        } 
    }
    if (!userFound) { // if var userFound not true
        setErrorFor(password,'Wrong credentials');// show error message
        event.preventDefault(); // prevent doc to do his action
    }
};
function register(){
     let fNameValue = fName.value.trim(); // getting the value typed in the First Name input.
     let lNameValue = lName.value.trim();
     let bDayValue =  bDay.value.trim();
     let regEmailValue = regEmail.value.trim();
     let regPasswordValue = regPassword.value.trim();
     let regPasswordCheckValue = regPasswordCheck.value.trim();
     
    if(!fNameValue){ // check if first name is empty
     setErrorFor(fName,'First Name can not be blank');
     return false;
    } else {
        setSuccsessFor(fName);
    }
    if(!lNameValue){ // check if last name is empty
        setErrorFor(lName,'Last Name can not be blank');
        return false;
    } else {
        setSuccsessFor(lName);
    }
    if(!bDayValue){ // check if birthdate is empty
        setErrorFor(bDay,'Birthdate can not be blank');
        return false; 
    } else {
        setSuccsessFor(bDay);
    }
    if(!regEmailValue){ // check if email is not empty
        setErrorFor(regEmail,'Email can not be blank');
        return false;
    } else if (!isEmail(regEmailValue)){ // check if email format is good.
        setErrorFor(regEmail,'Email not valid!');
        return false;
    } else {
        setSuccsessFor(regEmail);
    }
    if(!regPasswordValue){ // check if password is not empty
        setErrorFor(regPassword,'Password can not be blank');
        return false;
    } else if (regPasswordValue.length <= 7){ // check if password is min 7 chr long
        setErrorFor(regPassword,'Password min 7 characters long');
        return false;
    } else if (regPasswordValue.search(/[0-9]/) == -1) { // check if password has at least one number
        setErrorFor(regPassword,'Password must contain at least one number');
        return false;
    }else {
        setSuccsessFor(regPassword);
    }
    if(regPasswordCheckValue !== regPasswordValue){ // check if passwords match 
        setErrorFor(regPasswordCheck,'Passwords do not match ');
        return false;
    }else{ // if all the above are correct then add this to the Array of users as a new user.
        users.push({
            active: false,
            firstName: fNameValue ,
            lastName: lNameValue,
            birthdate: bDayValue,
            password: regPasswordValue,
            userName: regEmailValue,
        }); 
        openCity(event, "London") // redirect to the London (Login) tab. This func is added in html 'onclick'.
    }   
};
// On click of tab the image change as well as the tab.
$("#registerTab").bind("click", function() {
    $(".bg").attr("src","img/login3.svg");
  });
  $("#loginTab").bind("click", function() {
    $(".bg").attr("src","img/login2.svg");
  });
// On keypress change the image from left of the input field
 $('#login-form,#register-form').on('keypress', function(){
    $(".bg").attr("src","img/typing.svg").css({'width': '40vw','right': '13%'})
 });
 
  // Make the div with img and form gragabble
 $( function() {
    $( "#drag" ).draggable();
  } );

  //Toggle switch

let checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}