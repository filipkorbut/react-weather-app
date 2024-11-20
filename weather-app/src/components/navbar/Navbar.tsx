import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";

const Navbar = () => {
  return (
    <div className="container-fluid p-0">
        
      <nav className="navbar navbar-expand-lg navbar-light w-100 custom-navbar-bg d-flex align-items-start flex-column">
        {/* Top part of the navbar. Contains the logo */}
        <div className=" w-100">
          <NavbarTop />
        </div>
        
        {/* Bottom part of the navbar. Contains the links */}
        <div className="w-100 ">
          <NavbarBottom />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
