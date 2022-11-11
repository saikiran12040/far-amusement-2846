
  import {appliances, electronics, packages,WFHEssentials,furniture,fitness} from "../components/data.js"
  console.log(packages);
 let data=packages;
 let bedroomscount=packages.length;
 let WFHEssentialscount=WFHEssentials.length;
 let electronicscount=electronics.length;
 let furniturecount=furniture.length;
 let appliancescount=appliances.length;
 let fitnesscount=fitness.length;
console.log(bedroomscount,WFHEssentialscount,electronicscount,furniturecount,appliancescount,fitnesscount);

 let data1;
 
//  console.log(productservice)
let rentupdated;
let productCard=({id,productimage,title,rent})=>{
  let div=document.createElement('div');
  div.setAttribute("class","product");
  let img=document.createElement('img');
  img.setAttribute("class","productimage");
  img.src=productimage;
  let h2=document.createElement('h2');
  h2.innerText=title;
  let div1=document.createElement('div');
  div1.setAttribute("class","productprice");
  let rentp=document.createElement('h2');
  rentp.setAttribute("class","productprice");
  
  var slider=document.getElementById("myRange");
  var output=document.getElementById("value");
  output.innerHTML=slider.value ;
  slider.oninput=function(){
    output.innerHTML=this.value;
  }
  let resetbtn=document.getElementById("resert")
  resetbtn.addEventListener("click",function(){
    output.innerHTML=1;
    slider.value=1;
  })
  slider.addEventListener("mousemove",function(){
    var x=slider.value*10;
    var y=slider.value/10;
    rentp.innerText=`${rent*y}/mon`;
    var color='linear-gradient(90deg,rgb(1,134,179)'+ x +'%,rgb(214,214,214)'+x+'%)';
    slider.style.background=color;
  })

  rentp.innerText=`${rent}/mon`;
  div1.append(rentp)
  div.append(img,h2,div1);
  return div;
}
let renderDom=(data1)=>{
  let cont=document.getElementById('packagecontainer');
  data1.forEach((el)=>{
    console.log(el)
      let card=productCard(el);
      cont.append(card);
  });
};

for(let i=0; i<packages.length; i++){
  data1=packages[i].product
  renderDom(data1);
 }
 let renderDom1=(data)=>{
  let cont=document.getElementById('packagecontainer');
  data.forEach((el)=>{
    console.log(el)
      let card=productCard(el);
      cont.append(card);

  });
};
renderDom1(data);


document.getElementById("itemcount1").innerText=bedroomscount;

document.getElementById("itemcount2").innerText=electronicscount;
document.getElementById("itemcount3").innerText=appliancescount;

document.getElementById("itemcount4").innerText=WFHEssentialscount;
document.getElementById("itemcount5").innerText=furniturecount;
document.getElementById("itemcount6").innerText=fitnesscount;

  })
};

