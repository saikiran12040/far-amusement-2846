

let data=JSON.parse(localStorage.getItem("rentproduct"))

// let arr=[
//     {
//         "id": 1,
//         "productimage": "https://p.rmjo.in/moodShot/zqztx0ou-1024x512.jpg",
//         "title": "Cross Trainer C-500",
//         "rent": "1109",
//         "deliverytime": "72 hrs",
//         "dimensions": [
//           54,
//           46,
//           23
//         ],
//         "producttype": "",
//         "description": "The C-500 cross-trainer delivers an instinctively natural stride that ensures a safe and consistent strengthening workout for your upper and lower body with reduced stress on your knees. The 8-level resistance control provides additional personalization for your workouts with heart-rate monitoring, making it an ideal fitness companion for your everyday workouts.",
//         "features": [
//           "Capacity/Size : 53",
//           "Max user weight: 110kg",
//           "8kg flywheel for a smooth noise-free workout",
//           "Non-slip pedals with 18 inches stride",
//           "Monitor distance, time, calories & heart-rate",
//           "Accessory tablet holder"
//         ],
//         "material": "",
//         "color": "",
//         "deposit": "1719"
//       },
//       {
//         "id": 1,
//         "productimage": "https://p.rmjo.in/moodShot/zqztx0ou-1024x512.jpg",
//         "title": "Cross Trainer C-500",
//         "rent": "1109",
//         "deliverytime": "72 hrs",
//         "dimensions": [
//           54,
//           46,
//           23
//         ],
//         "producttype": "",
//         "description": "The C-500 cross-trainer delivers an instinctively natural stride that ensures a safe and consistent strengthening workout for your upper and lower body with reduced stress on your knees. The 8-level resistance control provides additional personalization for your workouts with heart-rate monitoring, making it an ideal fitness companion for your everyday workouts.",
//         "features": [
//           "Capacity/Size : 53",
//           "Max user weight: 110kg",
//           "8kg flywheel for a smooth noise-free workout",
//           "Non-slip pedals with 18 inches stride",
//           "Monitor distance, time, calories & heart-rate",
//           "Accessory tablet holder"
//         ],
//         "material": "",
//         "color": "",
//         "deposit": "1719"
//       },
//       {
//         "id": 1,
//         "productimage": "https://p.rmjo.in/moodShot/zqztx0ou-1024x512.jpg",
//         "title": "Cross Trainer C-500",
//         "rent": "1109",
//         "deliverytime": "72 hrs",
//         "dimensions": [
//           54,
//           46,
//           23
//         ],
//         "producttype": "",
//         "description": "The C-500 cross-trainer delivers an instinctively natural stride that ensures a safe and consistent strengthening workout for your upper and lower body with reduced stress on your knees. The 8-level resistance control provides additional personalization for your workouts with heart-rate monitoring, making it an ideal fitness companion for your everyday workouts.",
//         "features": [
//           "Capacity/Size : 53",
//           "Max user weight: 110kg",
//           "8kg flywheel for a smooth noise-free workout",
//           "Non-slip pedals with 18 inches stride",
//           "Monitor distance, time, calories & heart-rate",
//           "Accessory tablet holder"
//         ],
//         "material": "",
//         "color": "",
//         "deposit": "1719"
//       },
//       {
//         "id": 1,
//         "productimage": "https://p.rmjo.in/moodShot/zqztx0ou-1024x512.jpg",
//         "title": "Cross Trainer C-500",
//         "rent": "1109",
//         "deliverytime": "72 hrs",
//         "dimensions": [
//           54,
//           46,
//           23
//         ],
//         "producttype": "",
//         "description": "The C-500 cross-trainer delivers an instinctively natural stride that ensures a safe and consistent strengthening workout for your upper and lower body with reduced stress on your knees. The 8-level resistance control provides additional personalization for your workouts with heart-rate monitoring, making it an ideal fitness companion for your everyday workouts.",
//         "features": [
//           "Capacity/Size : 53",
//           "Max user weight: 110kg",
//           "8kg flywheel for a smooth noise-free workout",
//           "Non-slip pedals with 18 inches stride",
//           "Monitor distance, time, calories & heart-rate",
//           "Accessory tablet holder"
//         ],
//         "material": "",
//         "color": "",
//         "deposit": "1719"
//       }
// ]


localStorage.setItem("rentproduct",JSON.stringify(arr))
let cont=document.getElementById("show_cartproducts")
let reamount=0
let rentalamount=0
let deliveryamt=0
let gst=0
let tamt=0
let  proceed=0

function stich(data){
    cont.innerHTML=null
    data.forEach(function(el,ind){
        // console.log(el.id)
        let data_div=document.createElement("div")
        data_div.id="data_div"
    
        let cart_details=document.createElement("div")
        cart_details.id="cart_details"
    
        let img_product=document.createElement("div")
        img_product.id= "img_product"
    
        let s_photo=document.createElement("img")
        s_photo.src=el.productimage
        img_product.append(s_photo)
        // 
       let cart_rate=document.createElement("div")
        cart_rate.id="cart_rate"
        let nam=document.createElement("div")
        nam.id="nam"
        let h5=document.createElement("h5")
        h5.id="Pro_name"
        h5.innerText=el.title
        nam.append(h5)
       
     // 
        let amt=document.createElement("div")
        amt.id="amt"
        let p1=document.createElement("p")
        p1.innerText=`Rent: Rs${el.rent} /mon`
        let p2=document.createElement("p")
        p2.innerText=`deposit: Rs${el.deposit} /mon`
        amt.append(p1,p2)
        cart_rate.append(nam,amt)
        cart_details.append(img_product,cart_rate)
    
     // 
        let add=document.createElement("div")
        add.id="add"
        let plus=document.createElement("button")
        plus.id="plus"
        plus.innerText="delete"
        plus.addEventListener("click",function(){
            deleteit(ind)
        })
    
    
     // 
        var x = document.createElement("SELECT");
        x.setAttribute("id", "select");
        document.body.appendChild(x);
    
        var z = document.createElement("option");
        z.setAttribute("value", "12 month");
        var t = document.createTextNode("12 month");
        z.appendChild(t);
        document.getElementById("select").appendChild(z);
        var y = document.createElement("option");
        y.setAttribute("value", "3 month");
        var t = document.createTextNode("3month");
        y.appendChild(t);
        document.getElementById("select").appendChild(y);
    
        var u = document.createElement("option");
        u.setAttribute("value", "6 month");
        var t = document.createTextNode("6 month");
        u.appendChild(t);
        document.getElementById("select").appendChild(u);
    
        add.append(plus,x)
    
        //
    
        let Bottom_div=document.createElement("div")
        let last=document.createElement("h5")
        last.innerText="@ Delivery in 72 hrs !"
    
        Bottom_div.append(last)
    
        data_div.append(cart_details,add,Bottom_div)
    
      
        
        cont.append(data_div)
        
        reamount+=+el.deposit
        deliveryamt+=reamount/20
        rentalamount+=+el.rent
        gst=rentalamount/6

        tamt=rentalamount+gst
        localStorage.setItem("total",tamt)
        proceed+=reamount+deliveryamt
    });
    let refund=document.getElementById("refund_amount")
    refund.innerText=reamount
    let del=document.getElementById("delivery_amount")
    del.innerText=deliveryamt
    
    let re=document.getElementById("rent")
    re.innerText=rentalamount

    let gstt=document.getElementById("gst")
    gstt.innerText=Math.floor(gst)

    let ttl=document.getElementById("total")
    ttl.innerText=Math.floor(tamt)

    let proc=document.getElementById("proceed_tamt")
    proc.innerText=Math.floor(tamt)

}
stich(data)


function  deleteit(ind){
    let data1=JSON.parse(localStorage.getItem("rentproduct"))
    data1.splice(ind,1)
    localStorage.setItem("rentproduct", JSON.stringify(data1))
    // cont.innerHTML=null
    stich(data1)
}

let proceed_btn=document.getElementById("pro")

proceed_btn.onclick=()=>{
    
}
localStorage.setItem("total",tamt)


import {navbar} from '../components/navbar.js'

//import {navbar} from './components/navbar.js'

let nav=document.getElementById('navbar')
nav.innerHTML=navbar();

console.log("check")