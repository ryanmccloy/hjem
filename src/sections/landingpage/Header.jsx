import OpeningTimes from "../../components/OpeningTimes";
import Socials from "../../components/Socials";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="pt-[15px] px-[15px] pb-[30px] md:p-[30px] md:flex md:flex-col md:justify-between 2xl:w-1/3 ">
      <div>
        <h1>HJEM.</h1>
        <p className="pb-[30px] md:w-[250px]">
          Noun. hjem n - a home, place of origin or belonging.
        </p>
        <div className="hidden md:block">
          <Socials size="md" />
        </div>
      </div>

      <div className="hidden md:block ">
        <OpeningTimes where="landingPage" />
      </div>

      <div className="block md:hidden">
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
