const navStyle =
  "border border-primary p-1 text-center rounded w-1/5 hover:bg-primary hover:text-secondary hover:cursor-pointer transition-all duration-300";

const aStyle = "block w-full h-full";

function NavBar() {
  return (
    <nav aria-label="Main Navigation">
      <ul className="flex justify-between">
        <li className={navStyle}>
          <a href="#aboutus" className={aStyle}>
            About Us
          </a>
        </li>
        <li className={navStyle}>
          <a href="#menu" className={aStyle}>
            Menu
          </a>
        </li>
        <li className={navStyle}>
          <a href="#gallery" className={aStyle}>
            Gallery
          </a>
        </li>
        <li className={navStyle}>
          <a href="#cafeevents" className={aStyle}>
            Events
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
