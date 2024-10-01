import Header from "./Header";
import LandingImage from "./LandingImage";

function LandingPage() {
  return (
    <section
      id="landing"
      className="h-screen-dvh flex flex-col overflow-hidden md:flex-row"
    >
      <Header />
      <LandingImage />
    </section>
  );
}

export default LandingPage;
