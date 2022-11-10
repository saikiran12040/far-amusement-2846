
const sort=()=>{
    return`<div id="sideRhs"></div>
    <div id="side-line">
    <h6 class="head">NEED HELP ?</h6>
    <p id="border">Chat with us (9AM - 6PM)</p>
    <p><i class="fa-regular fa-paper-plane"></i> jo@rentomojo.com</p>
    <h5>DOWNLOAD APP</h5>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDogSm_B_KGUTT3h9JhTGt1cc2b9QzEJzlA&usqp=CAU" alt="">
 </div>`
}
const last =()=>{
    return ` <div>
    <P class="pvt">© 2022. Edunetwork Pvt. Ltd.</P>
 </div>
 <div>
 
  <button class="yt"><i class="fa-brands fa-youtube"></i></i></button>
  <button class="linke"><i class="fa-brands fa-linkedin"></i></button>
  <button class="twitt"><i class="fa-brands fa-twitter"></i></button>
  <button class="fac"><i class="fa-brands fa-facebook"></i></button>
 </div>
 <div>
 GoUp<span class="up"><i class="fa-solid fa-angle-up"></i></span>

 </div>`
 
}
export {sort,last, footer}

const footer =()=>{
    let footerArr = [
      {
        heading: "RENTOMOJO",
        items: [
          {
            name: "About Us",
            link: "https://www.rentomojo.com/about/aboutus",
          },
          {
            name: "Culture",
            link: "https://www.rentomojo.com/about/culture",
          },
          {
            name: "Investors",
            link: "https://www.rentomojo.com/about/investors",
          },
          {
            name: "Careers",
            link: "https://www.rentomojo.com/about/careers",
          },
          {
            name: "Contact",
            link: "https://www.rentomojo.com/contact",
          },
          {
            name: "Our Benefits",
            link: "https://www.rentomojo.com/benefits",
          },
          {
            name: "Sitemap",
            link: "https://www.rentomojo.com/sitemap",
          },
        ],
      },
      {
        heading: "INFORMATION",
        items: [
            {
               name:"Blog",
               link:"https://www.rentomojo.com/blog/"
            },
             {
                name:"FAQs", 
                link:"https://rentomojodesk.freshdesk.com/support/home",
             },
              {
                name:"Documments Required",
                link:"https://www.rentomojo.com/kyc-documents",
              }
           
            ],
      },
      {
        heading: "POLICIES",
        items: [
            {
                name:"Shipping Policy",
                link:"https://www.rentomojo.com/shipping-policy"
             },
             {
                name:"Cancellation & Return",
                link:"https://www.rentomojo.com/cancel-and-return-policy"
             },
             {
                name:"Privacy Policy",
                link:"https://www.rentomojo.com/privacy-policy"
             },
             {
                name:"Rental Terms & Conditions",
                link:"https://www.rentomojo.com/terms-and-conditions"
             },
             {
                name:  "Referral Terms & Conditions",
                link:"https://www.rentomojo.com/referral/terms"
             },
        ],
      },
    ];
      
      localStorage.setItem("footers", JSON.stringify(footerArr));
      
      let footerApply = JSON.parse(localStorage.getItem("footers"));
    
      display(footerApply);
}

const display = (footerApply) => {
    let sideRhs_div = document.getElementById("sideRhs");
    sideRhs_div.innerText = null;
  
    footerApply.forEach((el) => {
      let div = document.createElement("div");
      let heading = document.createElement("h6");
      heading.setAttribute("class","head")
      heading.innerText = el.heading;
  
      div.append(heading);
  
      el.items.forEach((each) => {
        let itemDiv = document.createElement("div");
        let item = document.createElement("a");
        item.setAttribute("class","color")
        item.setAttribute("href", each.link)
        item.innerText = each.name;
        itemDiv.append(item)
        div.append(itemDiv);
      });
      sideRhs_div.append(div);
    });
  };


