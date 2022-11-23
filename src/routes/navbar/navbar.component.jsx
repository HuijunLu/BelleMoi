import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="shopName" to="/">
          <div>BelleMoi</div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="shop">shop</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
