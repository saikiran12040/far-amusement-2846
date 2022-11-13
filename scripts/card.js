import {navbar} from '../components/navbar.js'

//import {navbar} from './components/navbar.js'

let nav=document.getElementById('navbar')
nav.innerHTML=navbar();

console.log("check")






// import {navbar} from '../components/navbar.js'

// //import {navbar} from './components/navbar.js'

// let nav=document.getElementById('navbar')
// nav.innerHTML=navbar();

console.log("check")
let cf=document.getElementById("confirm")

cf.onclick=(e)=>{
    e.preventDefault()
   
    let branch=document.getElementById("branch").value
    let ifsc=document.getElementById("ifsc").value
    let cn=document.getElementById("cn").value
    let cvv=document.getElementById("cvv").value

    if(branch==""||ifsc==""||cn==""||cvv==""){

        alert("Fill all details")
    }else{
        window.location.href="paymentsucess.html"
    }
}
let amt=localStorage.getItem("total")
let tot=document.getElementById("tot")
tot.innerText=amt