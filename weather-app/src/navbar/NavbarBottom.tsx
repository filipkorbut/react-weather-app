
const NavbarBottom = () => {
    const navItems = [
      "POLAND",
      "EUROPE",
      "WORLD",
      "30-DAY FORECAST",
      "AIR QUALITY",
      "OTHER CITIES",
    ];
  
    return (
      <ul className="navbar-center list-group list-group-horizontal">
        {navItems.map((item, index) => (
          <li key={index} className="list-group-item">
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-decoration-none"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  export default NavbarBottom;