import logo from '../../assets/logo.png'; 

const NavbarTop = () => {
  return (
    <div className="navbar-left w">
      <a
        className="navbar-brand d-flex align-items-center"
        href="index.html"
        aria-label="Home"
      >
        <img
          src={logo}
          alt="Logo"
          width="100"
          height="100"
          className="d-inline-block align-text-top"
        />

        <h1 className="text-white">Weather App</h1>
      </a>
    </div>
  );
};
export default NavbarTop;