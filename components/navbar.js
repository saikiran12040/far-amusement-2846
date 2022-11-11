let navbar = () => {
  return `
    <div id="box">
            <a href="index.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_EBNx0delHQ4Bg4-VDwno4msVSYZ2QHW6A&usqp=CAU"></a>
            <select id="city">
                <option>Mumbai</option>
            </select>
         <form action="" class="search-form">
                <input type="search" name=""placeholder="Search for products" class="search"/>
            </form> 
         
           
            <button id="card"><a href="cart.html"><i class="fa-solid fa-cart-shopping">Cart</i></a></button>
            <button id="login-sign"><a href="login">LOGIN/SIGNUP</a></button>
        </div>
    `;
};
export default navbar;
