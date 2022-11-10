
  import {packages} from "../components/data.js"
  console.log(packages);

 for (let i=0;i<packages.length;i++){
  let pack=packages[i]
  let item=pack[i]
  console.log(item)
  renderDom(item)
 }
 let renderDom=(item)=>{
  let cont=document.getElementById('packagecontainer');
  data.forEach((el)=>{
      let card=productCard(el);
      cont.append(card);
  })
};