import {nav3} from '../components/navbar.js'
let nav4=document.getElementById('nav3')
nav4.innerHTML=nav3();



let list = localStorage.getItem("quantity")
let productarr =JSON.parse(localStorage.getItem('cart'))||[]

let append1=(productarr)=>{ 
    let cont=document.getElementById('cartview')
    cont.innerHTML=null
    productarr.forEach((el,index)=>{
                
        let div=document.createElement('div')
        div.setAttribute('class','item')
        let image=document.createElement('img')
        image.src=el.productimage
        let title=document.createElement('h3')
        title.innerText=el.title
        let div4=document.createElement('div')
        div4.setAttribute('class','ma')
        let div5=document.createElement('div')
        div5.setAttribute('class','ca')
        let div1=document.createElement('div')
        div1.setAttribute('class','rentdep')
        let rent=document.createElement('p')
        rent.innerText=`Rent:${el.rent*list}`
        let deposit=document.createElement('h2')
        deposit.innerText=`Deposit:${el.deposit*list}`
        deposit.setAttribute('class','depo')
        let delivery=document.createElement('h2')
        delivery.innerText=`Delivery by:${el.deliverytime}`
        delivery.setAttribute('class','delivery')
        let qtn=document.createElement('p')
        qtn.innerText=`Quantity: ${list}`
        qtn.setAttribute('class','qtn')
       let div2=document.createElement('div')
       div2.setAttribute("class","rego")
        let btn=document.createElement('button')
        btn.setAttribute('class',"remove")
        btn.innerText="REMOVE"
        btn.onclick=()=>{
            remove(index)
        }
        let btn1=document.createElement('button')
        btn1.setAttribute("class","goback")
        btn1.innerText="Go Back"
        btn1.onclick=()=>{
            window.location.href="productview.html"
        }
        div5.append(div1,image,title)
        div4.append(div2)
        div2.append(btn,btn1)
        div1.append(rent,deposit)
        div.append(image,title,div1,qtn,div2)
        cont.append(div)
      
    })
}
append1(productarr)


function remove(index){
    
    let productarr=JSON.parse(localStorage.getItem('cart')||[])
    productarr.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(productarr))
    append1(productarr)
    cart()
}
let cart=()=>{
    let carts=document.getElementById('cart_count')
    let data =JSON.parse(localStorage.getItem('cart'))||[]
    carts.innerText=data.length
}