 import React from 'react';
 import './Header.css';
 import MenuIcon from '@material-ui/icons/Menu';
 import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
 import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

 //  import SearchIcon from '@material-ui/icons/Search';
//  import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

//  import logo from 'kalaa.comkalaa logo.png' 



function Header() {
    return(
        <section className="header">
            <div className="header_inner_wrap">
                <div className="columns">
                    <div className="cl_1_shopCateg">
                        <div className="icon_text">
                            {/* {Icon And Text} */}
                            <MenuIcon className = "header_MenuIcon"/>
                            <div className="text_shopAllCategory">Shop All Categories</div>
                        </div>
                    </div>
                    <div className="cl_2_logo">
                        {/* logo */}
                        <img 
                            className = "header_logo" class="center"
                            src={process.env.PUBLIC_URL + '/kalaalogo.png'}
                        /> 
                    </div>
                    <div className="cl_3_loginCart">
                        <div className="login_Cart">
                            {/* login & Cart */}
                            <AccountCircleOutlinedIcon className="icon_Login"/>
                            <ShoppingCartOutlinedIcon className="icon_cart"/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



//  function Header() {
//     return (
//         <div className="header">
//             <img 
//                 className = "header_logo" class="center"
//                 src={process.env.PUBLIC_URL + '/kalaalogo.png'}/> 
            
//             {/* <div className = "header_search">
//                 <input
//                     className = "header_searchInput"
//                     type="text"/>
//                     <SearchIcon
//                     className = "header_searchIcon"/>
//             -*
//             </div> */}

//             <div className = "header_nav">
//                 <div className = "header_option">
//                     <span className= "header_optionLineOne">Hello Guest</span>
//                     <span className= "header_optionLineTwo">Sign In</span>
//                 </div>
//                 <div className = "header_option">
//                     {/* <span className= "header_optionLineOne">Returns</span>
//                     <span className= "header_optionLineTwo">& Orders</span> */}
//                 </div>
//                 <div className = "header_option">
//                     {/* <span className= "header_optionLineOne">Your</span>
//                     <span className= "header_optionLineTwo">Prime</span> */}
//                 </div>
//                 <div className = "header_option">
//                     <ShoppingCartIcon className = "header_cart"/>
//                 </div>
//             </div>    
        
//         </div>
//     );
// }

 export default Header;
