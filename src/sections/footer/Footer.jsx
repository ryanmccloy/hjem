import Socials from "../../components/Socials";
import Address from "../../components/Address";
import OpeningTimes from "../../components/OpeningTimes";

function Footer() {
  return (
    <footer className="bg-primary text-secondary font-light p-[15px] flex justify-between">
      <div className="flex flex-col gap-[20px]">
        <h2>
          <a href="#landing">HJEM.</a>
        </h2>
        <Socials size="sm" />
      </div>

      <Address />
      <OpeningTimes size="footer" />
    </footer>
  );
}

export default Footer;
