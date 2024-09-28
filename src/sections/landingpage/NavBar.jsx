const navStyle =
  "border border-primary p-1 text-center rounded w-1/5 hover:bg-primary hover:text-secondary hover:cursor-pointer transition-all transition-300";

function NavBar() {
  return (
    <nav aria-label="Main Navigation">
      <ul className="flex justify-between">
        <li className={navStyle}>
          <a href="#aboutus">About Us</a>
        </li>
        <li className={navStyle}>
          <a href="#menu">Menu</a>
        </li>
        <li className={navStyle}>
          <a href="#gallery">Gallery</a>
        </li>
        <li className={navStyle}>
          <a href="#events">Events</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
