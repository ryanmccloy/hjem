import AboutUsMobileParahraphs from "./AboutUsMobileParagraphs";
import Socials from "../../components/Socials";

function AboutUsMobile() {
  return (
    <section id="aboutus" className="h-screen-dvh min-h-[800px] flex flex-col">
      <header className="py-[30px] px-[15px] flex justify-between items-center">
        <h2>ABOUT US.</h2>
        <Socials />
      </header>
      <AboutUsMobileParahraphs />
    </section>
  );
}

export default AboutUsMobile;
