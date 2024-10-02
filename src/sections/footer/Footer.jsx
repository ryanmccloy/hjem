import Socials from "../../components/Socials";
import Address from "../../components/Address";
import OpeningTimes from "../../components/OpeningTimes";

function Footer() {
  return (
    <footer className="bg-primary text-secondary font-light p-[15px] flex justify-between md:p-[30px]">
      <div className="flex flex-col gap-[20px] grow">
        <h2>
          <a href="#landing">HJEM.</a>
        </h2>
        <Socials size="sm" />
      </div>

      <div className="flex justify-between grow md:justify-end md:gap-[60px]">
        <Address />
        <OpeningTimes size="footer" />
      </div>
    </footer>
  );
}

export default Footer;
