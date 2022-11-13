import {navbar} from '../components/navbar.js'
let nav=document.getElementById('navbar')
nav.innerHTML=navbar();

// import 2nd navbar
import {nav2} from '../components/navbar.js'
let nav3=document.getElementById('nav2')
nav3.innerHTML=nav2();


let element=JSON.parse(localStorage.getItem("products"))
console.log(element)


let productCard=(el)=>{
    let div=document.getElementById('itemview');
    div.setAttribute("class","product");
    div.onclick=()=>{
      console.log(el)
      window.location.href="proview.html";
      localStorage.setItem("products",JSON.stringify(el))
    }
    let img=document.createElement('img');
    img.setAttribute("class","productimage");
    img.src=el.productimage;
    let h2=document.createElement('h2');
    h2.innerText=el.title;
    let div1=document.createElement('div');
    div1.setAttribute("class","productprice");
    let rentp=document.createElement('h2');
    rentp.setAttribute("class","productprice");
    
    
  
    rentp.innerText=`${(el.rent)}/mon`;
    div1.append(rentp)
    div.append(img);
    return div;
}

productCard(element);

let title=document.getElementById("itemtitle");
title.innerText=element.title;

var slider1=document.getElementById("myRange1");
var output=document.getElementById("value1");
output.innerHTML=slider1.value ;
slider1.oninput=function(){
    output.innerHTML=`${this.value}+`;
}
// let resetbtn=document.getElementById("resert")
// resetbtn.addEventListener("click",function(){
//     output.innerHTML=1;
//     slider1.value=1;
// })
let ird=document.getElementById("ir");
let ird1=document.getElementById("ir1");
// console.log(ird)
slider1.addEventListener("mousemove",function(){
    var x=slider1.value*10;
    var y=slider1.value/10;
    // rentp.innerText=`${(el.rent)*y}/mon`;
    // let itemren=document.getElementById(itemrent)
    ird.innerText=`₹${(element.rent)*y}/mon`;
    ird1.innerText=`₹${(element.deposit)*y}/mon`;
    var color='linear-gradient(90deg,rgb(224,27,68)'+ x +'%,rgb(214,214,214)'+x+'%)';
    slider1.style.background=color;
})




ird.innerHTML=`₹${(element.rent)}/mon`;
ird1.innerHTML=`₹${element.deposit}/mon`;
 
let delivery=document.getElementById('date')
delivery.innerText=`18th-Nov-2022`;

let rentproduct=JSON.parse(localStorage.getItem("booked")) || [];
let bookbtn=document.getElementById("bookplan");
bookbtn.onclick=()=>{
    window.location.href="cart.html";
    localStorage.setItem("booked",JSON.stringify(element))
}
console.log(rentproduct)