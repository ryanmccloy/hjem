import AboutUsMobileParagraphs from "./AboutUsMobileParagraphs";
import Socials from "../../components/Socials";

function AboutUsMobile() {
  return (
    <section className="h-screen-dvh min-h-[800px] flex flex-col">
      <header className="py-[30px] px-[15px] flex justify-between items-center">
        <h2>ABOUT US.</h2>
        <Socials />
      </header>
      <AboutUsMobileParagraphs />
    </section>
  );
}

export default AboutUsMobile;
