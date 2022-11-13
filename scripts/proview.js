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
    let div2=document.createElement('div')
    div2.setAttribute('class','covidinfo')
    div2.id="Covid"
    let img1=document.createElement('img')
    img1.src="	https://www.rentomojo.com/public/images/icons/virusSafetyGreen.png"
    img1.id="imgcovid"
    let p=document.createElement('p')
    p.innerText="Safety precautions during COVID-19. We’re taking additional steps and precautionary measures to protect our community from COVID-19."
    let btn=document.createElement('button')
    btn.innerText="Know More"
    btn.onclick=()=>{
      window.location.href="https://www.rentomojo.com/covid19-response"
    }
    let h1=document.createElement('h1')
   h1.setAttribute('class','pd')
    h1.innerText="Product Details";
    let div3=document.createElement('div')
    div3.setAttribute('class','pd3')
    let h5=document.createElement('h1')
    h5.setAttribute('class','pd2')
     h5.innerText="Product Details";
    let div5=document.createElement('div')
    div5.setAttribute('class','details')
    let img2=document.createElement('img')
    img2.setAttribute('class','produ')
    img2.src=el.productimage;
    let div9=document.createElement('div')
    let h4=document.createElement('h4')
    h4.setAttribute('class','des')
    h4.style.lineHeight="20px"
    h4.innerText=`Description:${el.description}`;
    let div6=document.createElement('div')
    div6.setAttribute('class','mont')
    let div7=document.createElement('div')
    div7.setAttribute('class','main')
    let p2=document.createElement('p')
    p2.innerText=`Monthly Rent: ${el.rent}`
    let p3=document.createElement('p')
    p3.innerText=`Deposit: ${el.deposit}`
    let h2=document.createElement('h2');
    h2.innerText=el.title;
    let div1=document.createElement('div');
    div1.setAttribute("class","productprice");
    let rentp=document.createElement('h2');
    rentp.setAttribute("class","productprice");
    
    
  
    rentp.innerText=`${(el.rent)}/mon`;
    div1.append(rentp)
    div3.append(h5)
    div9.append(h4,div6)
    div6.append(p2,p3)
    div7.append(div5,div6)
    div5.append(img2,h4)
    div2.append(img1,p,btn)
    div.append(img,h1,div2,div3,div7);
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

let productarr=JSON.parse(localStorage.getItem("rentproduct")) || [];
let bookbtn=document.getElementById("bookplan");
bookbtn.onclick=()=>{
    productarr.push(element)
    localStorage.setItem("rentproduct",JSON.stringify(productarr))
}
console.log(productarr)