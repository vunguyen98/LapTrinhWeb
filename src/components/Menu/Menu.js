import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './Menu.css';

// const menus = [
//   {
//     name : "Trang chủ",
//     to : "/",
//     exact : true
//   },
//   {
//     name : "Quản lý sản phẩm",
//     to : "/products-list",
//     exact : false
//   }
// ];

// const MenuLink = ({label, to, active}) =>{
//   return(
//     <Route
//       path = {to}
//       exact = {active}
//       children ={ ({match}) =>{
//         var active = match ? "active" : "";
//         return(
//           <li className={"nav-item " + {active}}>
//             <Link to={to} className="nav-link">
//               {label}
//             </Link>
//           </li>
//         );
//       }}
//     />
//   );
//   }


class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div id="menu">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark clearfix">
          {/* Links */}
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <a className="nav-link text-light" style={{fontSize: 15}} href="#"><i className="fas fa-phone" style={{marginRight: 10}} />0125129321</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand " style={{marginLeft: 10, color: 'white'}}>|</a>
            </li>
            <li className="nav-item" style={{fontSize: 15}}>
              <a className="nav-link text-light" href=""><i className="fa fa-envelope" style={{marginRight: 10}} />ABCShop@gmail.com</a>
            </li>
            <li className="nav-item" style={{marginLeft: 150}}>
              <a className="nav-link text-light" href="">GIỚI THIỆU</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand " style={{marginLeft: 7, color: 'white'}}>|</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="">CHECK ĐƠN HÀNG</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand " style={{marginLeft: 7, color: 'white'}}>|</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="">CÁCH ĐO SIZE</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand " style={{marginLeft: 7, color: 'white'}}>|</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="">GÓP Ý THAN PHIỀN</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand " style={{marginLeft: 7, color: 'white'}}>|</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="">CHÍNH SÁCH ĐỔI TRẢ</a>
            </li>
          </ul>
        </nav>
      </div>

    <div id="menu2">
      {this.thanh()}
      
    </div>

  </div>
    );
  }

    // trong = () =>{
    //   return (
    //     <nav className="navbar navbar-expand-sm bg-white" style={{height: 180}}>
    //     <a className="navbar-brand" href=""><img src="/image/logo-shop.png" /></a>
    //     <a className="navbar-brand bg-white" href=""><img src="/image/shoe-man2.png" style={{position: 'absolute', left: 800, bottom: 90}} /></a>
    //     <a className="navbar-brand text-dark" href="" style={{position: 'absolute', left: 786, bottom: 70, fontSize: 15}}>GIÀY NAM</a>
    //     <a className="navbar-brand bg-white" href=""><img src="/image/high-heel.png" style={{position: 'absolute', left: 920, bottom: 98}} /></a>
    //     <a className="navbar-brand text-dark" href="" style={{position: 'absolute', left: 910, bottom: 70, fontSize: 15}}>GIÀY NỮ</a>
    //     <a className="navbar-brand bg-white" href=""><img src="/image/shoe-4.png" style={{position: 'absolute', left: 1025, bottom: 98}} /></a>
    //     <a className="navbar-brand text-dark" href="" style={{position: 'absolute', left: 1028, bottom: 70, fontSize: 15}}>SALE</a>
    //     <a className="navbar-brand bg-white" href=""><img src="/image/package.png" style={{position: 'absolute', left: 1145, bottom: 100}} /></a>
    //     <a className="navbar-brand text-dark" href="" style={{position: 'absolute', left: 1117, bottom: 70, fontSize: 15}}>HÀNG MỚI VỀ</a>
    //     <form className="form-inline" action>
    //       <input className="form-control mr-sm-2" placeholder="Bạn muốn tìm gì? " type="text" id="search" style={{position: 'absolute', left: 780, bottom: 30}} />
    //       <a href="" className="navbar-brand" style={{position: 'absolute', left: 980, bottom: 30}}><i className="fa fa-search" /></a>
    //     </form>
    //   </nav>
    //   );
    // }

    thanh = () =>{
      return(
        <nav className="navbar navbar-expand-lg bg-light">
          <a className="navbar-brand" href=""><img src="/image/logo-shop.png" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="nabar-list">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <img className="nav-link img-menu" src="/image/shoe-man2.png" />
                  <a className="nav-link" href="#">GIÀY NAM</a>
                </li>
                <li className="nav-item">
                <img className="nav-link img-menu" src="/image/high-heel.png" />
                  <a className="nav-link" href="#">GIÀY NỮ</a>
                </li>
                <li className="nav-item">
                <img className="nav-link img-menu" src="/image/shoe-4.png" />
                  <a className="nav-link" href="#">SALE</a>
                </li>
                <li className="nav-item">
                <img className="nav-link img-menu" src="/image/package.png" />
                  <a className="nav-link" href="#">HÀNG MỚI VỀ</a>
                </li>
              </ul>
            </div>
            
          </div>
          <div className="navbar-search">
            <form className="form-inline search" action>
              <input className="form-control mr-sm-2" placeholder="Bạn muốn tìm gì? " type="text" id="search" />
              <a href="" className="navbar-brand" ><i className="fa fa-search" /></a>
            </form>
          </div>
        </nav>

      );
    }
  // showMenu =(menus)=>{
  //   var result = null;
  //   if(menus.length > 0){
  //     result = menus.map((menu, index)=>{
  //       return (
  //         <MenuLink
  //           key={index}
  //           label={menu.name}
  //           to={menu.to}
  //           active={menu.exact}
  //         />
  //       );
  //     });
  //   }
  //   return result;
  // }

}

export default Menu;
