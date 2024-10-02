const navStyle =
  "border border-primary p-1 text-center rounded w-1/5 hover:bg-primary hover:text-secondary hover:cursor-pointer transition-all duration-300 md:w-fit md:border-none md:bg-secondary md:z-10 md:p-2";

const aStyle = "block w-full h-full";

function NavBar() {
  return (
    <nav
      aria-label="Main Navigation"
      className="md:absolute md:right-[30px] md:top-[42px] "
    >
      <ul className="flex justify-between md:gap-[15px]">
        <li className={navStyle}>
          <a href="#aboutus" aria-label="About us section" className={aStyle}>
            About Us
          </a>
        </li>
        <li className={navStyle}>
          <a href="#menu" aria-label="Cafe menu section" className={aStyle}>
            Menu
          </a>
        </li>
        <li className={navStyle}>
          <a href="#gallery" aria-label="Cafe image gallery" className={aStyle}>
            Gallery
          </a>
        </li>
        <li className={navStyle}>
          <a
            href="#cafeevents"
            aria-label="Upcoming cafe events"
            className={aStyle}
          >
            Events
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
