
const navbar=()=>{
    return`
    <div id="box">
    <a href="index.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_EBNx0delHQ4Bg4-VDwno4msVSYZ2QHW6A&usqp=CAU"></a>
    <div id="aCities">
    <span id="city">Delhi</span>
    <span>&#957</span>
</div>
<div id="mainBox">
    <div id="cmainBox">
        <div id="in">
            <input type="text" id="search" oninput="debounce(search,1000)">
        </div>
        <div id="l_container"></div>
    </div>
</div>
 <form action="" class="search-form">
        <input type="search" name=""placeholder="Search for products" class="search"/>
    </form> 
 
   
    <button id="card"><a href="./checkout.html"><i class="fa-solid fa-cart-shopping">Cart</i></a></button>
    <button id="login-sign"><a href="./login.html">LOGIN/SIGNUP</a></button>
</div>
`
}

const nav2=()=>{
    return `
    <div id="main">
    <div id="part1">
        <a href="index.html">Home</a>
        <p>&gt;</p>
        <p> Packages</p>
     </div>
     <div id="part2">
        <ul>
            <li class="pack"><a href="#">Packages</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Appliances</a></li>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Fitness</a></li>
        </ul>
    </div>       
    </div>
    `
}

export {navbar}




export {nav2}




