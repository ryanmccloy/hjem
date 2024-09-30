import Socials from "../../components/Socials";
import NavBar from "./NavBar";

function LandingPage() {
  return (
    <section
      id="landing"
      className="h-screen-dvh flex flex-col overflow-hidden"
    >
      <header className="pt-[15px] px-[15px] pb-[30px]">
        <div>
          <h1 className="">HJEM.</h1>
          <p className="pb-[30px]">
            Noun. hjem n - a home, place of origin or belonging.
          </p>
          <Socials hidden={true} />
        </div>

        <NavBar />
      </header>

      <div className="flex-1 relative">
        <img
          className="h-full object-cover"
          src="/images/herosection.jpeg"
          alt="HJEM. Belfast Cafe"
        />
        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
      </div>
    </section>
  );
}

export default LandingPage;
