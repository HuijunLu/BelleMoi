import { Outlet, Link } from "react-router-dom";
import { ReactComponent as ShopLogo } from "../../assets/crown.svg";

import './navbar.styles.scss'

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ShopLogo className="logo" />
        </Link>
        <Link className="shopName" to="/">
          <h1>BelleMoi</h1>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
