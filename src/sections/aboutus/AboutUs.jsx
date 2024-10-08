import AboutUsDestop from "./AboutUsDesktop";
import AboutUsMobile from "./AboutUsMobile";

function AboutUs() {
  return (
    <section id="aboutus">
      <div className="md:hidden">
        <AboutUsMobile />
      </div>

      <div className="hidden md:block">
        <AboutUsDestop />
      </div>
    </section>
  );
}

export default AboutUs;
