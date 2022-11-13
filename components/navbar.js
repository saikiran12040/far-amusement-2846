let navbar = () => {
  return `
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
         
           
            <button id="card"><a href="cart.html"><i class="fa-solid fa-cart-shopping">Cart</i></a></button>
            <button id="login-sign"><a href="login">LOGIN/SIGNUP</a></button>
        </div>
    `;
};
export default navbar;
