import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as ShopLogo } from "../../assets/crown.svg";
import { signOutUser } from '../../utils/firebase/firebase.utils.js'
import { UserContext } from "../../contexts/user.context";

import "./navbar.styles.scss";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ShopLogo className="logo" />
        </Link>
        <div className="shopName-container">
          <Link className="shopName" to="/">
            <h1>BelleMoi</h1>
          </Link>
        </div>
        {/* <Link className="shopName" to="/">
          <h1>BelleMoi</h1>
        </Link> */}

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {/* render signout if user is logged in otherwise sign in link */}
          {currentUser ? (
            <Link className="nav-link" to="/auth" onClick= {signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
