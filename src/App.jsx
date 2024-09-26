import LandingPage from "./sections/landingpage/LandingPage";
import AboutUs from "./sections/aboutus/AboutUs";
import Menu from "./sections/menu/Menu";
import Gallery from "./sections/gallery/Gallery";
import CafeEvents from "./sections/cafeevents/CafeEvents";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <header>
        <LandingPage />
      </header>

      <main>
        <section>
          <AboutUs />
        </section>
        <section>
          <Menu />
        </section>
        <section>
          <Gallery />
        </section>
        <section>
          <CafeEvents />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
