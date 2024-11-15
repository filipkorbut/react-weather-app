import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";


const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar-bg" style={{ width: '100%' }}>
        {/* Top part of the navbar. Contains the logo */}
        <NavbarTop />
        {/* Bottom part of the navbar. Contains the links */}
        <div className="mt-auto ">
          <NavbarBottom />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
