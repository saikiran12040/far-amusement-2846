import navbar from './components/navbar.js'
let nav=document.getElementById('navbar')
nav.innerHTML=navbar();

import { sort, last, footer } from "./components/footer.js";
const sort_div = document.getElementById("footer");
sort_div.innerHTML = sort();
footer();

const last_div = document.getElementById("last_portion");
last_div.innerHTML = last();

document.getElementById("search").addEventListener("input", function () {
  debounce(search, 1000);
});


// navbar functionlity start

const open = document.getElementById('aCities');
open.addEventListener("click", () => {
    const mb = document.getElementById('mainBox');
    mb.style.display = "block"
})


const url = `https://arcane-sands-22352.herokuapp.com/api/cityDetail`

let showDetail = async () => {
    let res = await fetch(url)
    res = await res.json()
    console.log(res)
    appendDom(res)
}
showDetail()

let search = async () => {
    let search = document.getElementById('search').value;
    let res = await fetch(`${url}/?q=${search}`)
    res = await res.json()
    if (res.length == 0) {
        let res = await fetch(url)
        res = await res.json()
        appendDom(res)
        return;
    }
    appendDom(res)
}
let id;

let debounce = (func, delay) => {
    if (id) clearTimeout(id)
    id = setTimeout(function () {
        func()
    }, delay)
}

let appendDom = (data) => {
    const cont = document.getElementById('l_container');
    cont.innerHTML = null;
    data.forEach(({ image, name }) => {
        const div = document.createElement('div');
        div.classList.add("c_l_container")
        const img = document.createElement('img');
        img.classList.add("cl_image")
        img.src = image;
        const p = document.createElement('p');
        p.classList.add('cl_name')
        p.innerText = name;

        div.append(img, p)
        div.addEventListener("click", () => {
            const city = document.getElementById('city');
            city.innerText = name;
            const mb = document.getElementById('mainBox');
            mb.style.display = "none"

        })
        cont.append(div)
    })
}
// navbar function is completed here
let movie1={
    name: "Saddle Shoe Rack Large",
    image: "https://p.rmjo.in/productSquare/hs7hg508-500x500.jpg",
    price: "Rent ₹ 189/mo",
    button:"See More",
}

let movie2={
    name: "Betty Dresser with Stool",
    image: "https://p.rmjo.in/productSquare/djbfgoay-500x500.jpg",
    price: "Rent ₹ 199/mo",
    button:"See More",
}

let movie3={
    name: "Miller Office Chair",
    image: "https://p.rmjo.in/productSquare/v7ie46j6-500x500.jpg",
    price: "Rent ₹ 149/mo",
    button:"See More",
}

let movie4={
    name: "Garfield Ottoman",
    image: "https://p.rmjo.in/productSquare/9o9eoir3-500x500.jpg",
    price: "Rent ₹ 479/mo",
    button:"See More",
}

let movie5={
    name: "Semi Automatic Washingmachine",
    image: "https://p.rmjo.in/productSquare/8x2o0azg-500x500.jpg",
    price: "Rent ₹ 189/mo",
    button:"See More",
}

let movie6={
    name: "Poise Study Table",
    image: "https://p.rmjo.in/productSquare/d25jc9wi-500x500.jpg",
    price: "Rent ₹ 229/mo",
    button:"See More",
}

let movie7={
    name: "Mini Fridge",
    image: "https://p.rmjo.in/productSquare/rctgx63e-500x500.jpg",
    price: "Rent ₹ 449/mo",
    button:"See More",
}

let movie8={
    name: "Apple iPhone XR 64GB ",
    image: "https://p.rmjo.in/productSquare/vmbb6qhr-500x500.jpg",
    price: "Rent ₹ 1639/mo",
    button:"See More",
}

let movie9={
    name: "LED TV-32 ",
    image: "https://p.rmjo.in/productSquare/8q8fshxj-500x500.jpg",
    price: "Rent ₹ 839/mo",
    button:"See More",
}

let movieData = [];
movieData.push(movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9)

localStorage.setItem("movies",JSON.stringify(movieData))

let images = JSON.parse(localStorage.getItem("movies")) ;

function display(images){
    document.querySelector("#container").innerHTML=null
  images.forEach(function(el, i){
      let div=document.createElement("div")
      let img=document.createElement("img");
      img.setAttribute("class","images")
      img.src=el.image
  
      let name=document.createElement("h6");
      name.setAttribute("class","title")
      name.innerText=el.name

    let div1=document.createElement("div");
       div1.setAttribute("class","main")
      let price=document.createElement("p");
      price.innerText=el.price
  
      let btn=document.createElement("button");
      btn.innerText="See More"
      btn.setAttribute("class","button")
      div1.append(price,btn)
      div.append(img, name,div1)
    
  
      document.getElementById("container").append(div)
  })
}

let dataPromise = new Promise(function(resolve,reject){

  setTimeout(function(){

  let movies = images

  if(images != null){
      resolve(movies)
  } else{
      reject(`ERR: Server not found/:`);
  }

  },3000)
});

dataPromise.then(function (res){
  display(res);
})
 .catch(function(err){
   console.log("err:",err)
})



document.getElementById("know").addEventListener("click",()=>{
    window.location.href="https://www.rentomojo.com/benefits"
})




document.querySelector(".yt").addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/c/RentomojoOfficial";
  });
  
  document.querySelector(".linke").addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/company/rentomojo/";
  });
  
  document.querySelector(".twitt").addEventListener("click", () => {
    window.location.href = "https://twitter.com/rentomojo";
  });
  
  document.querySelector(".fac").addEventListener("click", () => {
    window.location.href = "https://www.facebook.com/rentomojo";
  });
  
  document.querySelector(".up").addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  document.querySelector(".pvt").addEventListener("click", () => {
    window.location.href = "./index.html";
  });
  
  document.querySelector("#pack").addEventListener("click", () => {
    window.location.href ="https://www.rentomojo.com/bangalore/packages-on-rent";
  });
  
  document.querySelector("#furni").addEventListener("click", () => {
    window.location.href ="https://www.rentomojo.com/bangalore/furniture-on-rent";
  });

  document.querySelector("#Appli").addEventListener("click", () => {
    window.location.href ="https://www.rentomojo.com/bangalore/appliances-on-rent";
  });

  document.querySelector("#Elec").addEventListener("click", () => {
    window.location.href ="https://www.rentomojo.com/bangalore/electronics-on-rent";
  });

  document.querySelector("#Fit").addEventListener("click", () => {
    window.location.href ="https://www.rentomojo.com/bangalore/fitness-equipment-on-rent";
  });

  document.querySelector("#WFH").addEventListener("click", () => {
    window.location.href ="https://www.rentomojo.com/bangalore/wfh-essentials";
  });
  

 document.getElementById("greater").addEventListener("click",(e)=>{
    console.log(e);
    let ele = document.getElementById("container");
    console.log(ele);
    ele.scrollLeft += 400;
  })

  document.getElementById("less").addEventListener("click",(e)=>{
    console.log(e);
    let ele = document.getElementById("container");
    console.log(ele);
    ele.scrollLeft -= 400;
  })

  document.getElementById("greater1").addEventListener("click",(e)=>{
    console.log(e);
    let ele = document.querySelectorAll(".name-section");
    console.log(ele);
    ele.scrollLeft += 400;
  })

  document.getElementById("less1").addEventListener("click",(e)=>{
    console.log(e);
    let ele = document.querySelectorAll(".name-section");
    console.log(ele);
    ele.scrollLeft -= 400;
  })

