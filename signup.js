
import {navbar} from './components/navbar.js'
let nav=document.getElementById('navbar')
nav.innerHTML=navbar();


// login/signup popup
document.getElementById('login-sign').addEventListener('click',function(){
    document.querySelector('.popup').style.display="flex";
})
document.querySelector('.close1').addEventListener('click',function(){
    document.querySelector('.popup').style.display="none";
})

//for hiding password
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


// redirecting to indexpage for login
let sub=document.querySelector('.link')
sub.onclick=()=>{
    window.location.href="index.html"
}



// storing signin data to localstorage
JSON.parse(localStorage.getItem('data'))||[]

let sign=document.getElementById('continue')
sign.addEventListener('click',function(){
    regi(event)
})
let regi=(e)=>{
e.preventDefault()
var email=document.getElementById('email').value;
var password=document.getElementById('password').value;

if(email==""||password=="")
{
    alert('Fill all the Details')
}
else{
let obj={
    email,password
}
localStorage.setItem('data',JSON.stringify(obj))
}
}