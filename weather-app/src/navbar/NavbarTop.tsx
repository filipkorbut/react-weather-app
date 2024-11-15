import logo from '../assets/logo.png'; 

const NavbarTop = () => {
    return (
      <div className="navbar-left">
        <a className="navbar-brand d-flex align-items-center" href="index.html" aria-label="Home">
          <img
            src={logo}
            alt="Logo"
            width="150"
            height="150"
            className="d-inline-block align-text-top"
          />
          <h1>Weather App</h1>
        </a>
      </div>
    );
  };
  
  export default NavbarTop;