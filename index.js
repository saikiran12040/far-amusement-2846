
import {navbar} from '../components/navbar.js'

import {navbar} from './components/navbar.js'

let nav=document.getElementById('navbar')
nav.innerHTML=navbar();



// import 2nd navbar

// import {nav2} from '../components/navbar.js'
// let nav3=document.getElementById('nav2')
// nav3.innerHTML=nav2();

// console.log(nav2)







// login/signup popup
document.getElementById('login-sign').addEventListener('click',function(){
    document.querySelector('.popup').style.display="flex";
})
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.popup').style.display="none";
})


const forms=document.querySelector('.popup')
const pwShowHide=document.querySelectorAll('.eye-icon')
const links=document.querySelectorAll('.link')
// console.log(forms,pwShowHide,links)

pwShowHide.forEach(eyeIcon=>{
    eyeIcon.addEventListener('click',()=>{
        let pwFields=eyeIcon.parentElement.parentElement.querySelectorAll('#password')
        pwFields.forEach(password=>{
            if(password.type=="password"){
                password.type="text";
                eyeIcon.classList.replace("bx-hide","bx-show")
                return;
            }
            password.type="password";
            eyeIcon.classList.replace("bx-show","bx-hide")
        })
    })
})

links.forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        forms.classList.toggle('show-signup')
    })
})





// login functinality

let sb=document.querySelector('.link')
sb.onclick=()=>{
    window.location.href="signup.html"
}



JSON.parse(localStorage.getItem('data'))||[]

JSON.parse(localStorage.getItem('data'))||[]

let log=document.getElementById('continue')
log.addEventListener('click',function(){
    signin(event)
})

let signin=(e)=>{
    e.preventDefault()

    console.log("No")
    var email=document.getElementById('email').value;
    var pass=document.getElementById('password').value;

    var getEmail=localStorage.getItem('email1')
    var getpass=localStorage.getItem('password1')
 console.log(getEmail)
 console.log(getpass)
   
if(email==getEmail && pass==getpass)
{
    window.location.href="index.html"
}
else{
    alert('incorrect')
}
}

    // console.log("No")
    var em=document.getElementById('email').value;
    var pass=document.getElementById('password').value;

    var getEmail=document.getElementById('email')
    var getpass=document.getElementById('password')
 console.log(getEmail)
 console.log(getpass)
    if(em=="")
    {
        alert("Fill the data")
    }
    else{
        if(em==getEmail)
        {
            if(pass==getpass)
            {
            alert('Login Succesfill!')
            window.location.href="index.html";    
        }
            else{
                alert("wrong password")
            }
    }
    else{
        alert("Invalid Details")
    }   
}
}