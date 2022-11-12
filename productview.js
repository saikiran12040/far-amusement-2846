
import {navbar} from '../components/navbar.js'
let nav=document.getElementById('navbar')
nav.innerHTML=navbar();


// import 2nd navbar

import {nav2} from '../components/navbar.js'
let nav3=document.getElementById('nav2')
nav3.innerHTML=nav2();
let productarr=[]
productarr.push(JSON.parse(localStorage.getItem('products')))
console.log(productarr)


function displayPro(productarr)
{  
    let boxes=document.getElementById('boxes')
    boxes.innerHTML=null;
    productarr.forEach(function(el){
    let div=document.createElement('div')
    div.setAttribute('id','box1')
    // div.addEventListener("click", () => {
    //     localStorage.setItem("products", JSON.stringify(el))
    // })
    let img=document.createElement('img')
    img.setAttribute('src',el.productimage)
    img.addEventListener('click',()=>{
        window.location.href="cart.html"
    })

    let div1=document.createElement('div')
    div1.setAttribute('class',"content")
    let div2=document.createElement('div')
    div2.setAttribute('class','covidinfo')
    let img1=document.createElement('img')
    img1.setAttribute('src',el.covidImage)
    let p=document.createElement('p')
    p.innerText=el.info
    let btn=document.createElement('button')
    btn.innerText="Know More"
    btn.onclick=()=>{
      window.location.href="https://www.rentomojo.com/covid19-response"
    }
    let h1=document.createElement('h1')
    h1.innerText="Product Details"
    let div3=document.createElement('div')
    div3.setAttribute('class',"maincontent")
    let div4=document.createElement('div')
    div4.setAttribute('class',"content-left")
    let img2=document.createElement('img')
    img2.setAttribute('src',el.productimage)

    let div5=document.createElement('div')
    div5.setAttribute('class',"content-right")
     let h3=document.createElement('h3')
     h3.innerText=el.title
    let p1=document.createElement('p')
    p1.innerText=el.description


    let div6=document.createElement('div')
    div6.setAttribute('class','feature')
    let div7=document.createElement('div')
    div7.setAttribute('class','color')

    let p3=document.createElement('p')
    p3.innerText=el.dimensions
    let div8=document.createElement('div')
    div8.setAttribute('class','feature2')
    
    let div9=document.createElement('div')
    div9.setAttribute('class','price')
    let p4=document.createElement('p')
    p4.innerText=`Montly Rent: ₹${el.rent}`
    
    let p5=document.createElement('p')
    p5.innerText=`Deposits:₹${el.deposit}`

    let div10=document.createElement('div')
    div10.setAttribute('id','box2')

    let p6=document.createElement('p')
    p6.innerText=el.title

    let h6=document.createElement('h6')
    h6.innerText="How long do you want to rent this for? (Months)"
    let p10=document.createElement('p')
    p10.innerText=`Delivery By:${el.deliverytime}`
    p10.setAttribute('class','delivery')
    let quantity = document.createElement("input")
    quantity.id="star"
    quantity.type="Number";
    quantity.value="1";
    let btn1=document.createElement('button')
    btn1.innerText="Book Your Plan"
    btn1.setAttribute('class','bookplan')
    btn1.onclick=()=>{
        addToCard(el)
        localStorage.setItem("quantity", quantity.value)
    }
    let div11=document.createElement('div')
    div11.setAttribute('class','extrapro')

    let h=document.createElement('h1')
    h.innerText="You may also like this"
    let p7=document.createElement('p')
    p7.innerText="Products recommendation based on your search activity"
    let div12=document.createElement('div')
    div12.setAttribute('class','card')

let div13=document.createElement('div')
    div13.setAttribute('class','subcard')
    let img3=document.createElement('img')
    img3.setAttribute('src',"https://p.rmjo.in/productSquare/17kamdeu-500x500.jpg")
    let img4=document.createElement('img')
    img4.setAttribute('src',"https://p.rmjo.in/productSquare/g4ow6lcd-300x300.jpg")
    let div14=document.createElement('div')
    div14.setAttribute('class','sub')
    let h5=document.createElement('h3')
    h5.innerText=el.title
    
    let btn2=document.createElement('button')
    btn2.innerText="CheckNow"
    btn2.onclick=()=>{
      window.location.href="product.html"
    }
    div2.append(img1,p,btn)
    div4.append(img2)
    div6.append(div7,div8)
    div9.append(p4,p5)
    div5.append(h3,p1,div6,div7,div8,div9)
    div10.append(p6,h6,p10,quantity,btn1)
    div3.append(div4,div5,div10)
    div11.append(h,p7)
    div14.append(h5,btn2)
    div13.append(img3,img4,div14)
    div12.append(div13)
    div1.append(div2,h1,div3,div11,div12)
    div.append(img,div1)
    boxes.append(div)

})
}

displayPro(productarr)

function addToCard(el){
 
    let productarr=JSON.parse(localStorage.getItem('cart'))||[];
    productarr.push(el)
    localStorage.setItem('cart',JSON.stringify(productarr))
cart()
}

let cart1=document.getElementById('card')
cart1.onclick=()=>{
    cart()
}
let cart=()=>{
    let carts=document.getElementById('cart_count')
    let productarr =JSON.parse(localStorage.getItem('cart'))||[]
    carts.innerText=productarr.length
}

let card=document.getElementById('card')
card.onclick=()=>{
    window.location.href="cart.html"
}