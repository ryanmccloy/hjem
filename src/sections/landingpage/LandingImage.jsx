import NavBar from "./NavBar";

function LandingImage() {
  return (
    <div className="flex-1 relative md:order-first">
      <div className="hidden md:block">
        <NavBar />
      </div>
      <img
        className="h-full w-full object-cover"
        src="/images/herosection.jpeg"
        alt="HJEM. Belfast Cafe"
      />
      <div className="absolute inset-0 bg-black bg-opacity-15"></div>
    </div>
  );
}

export default LandingImage;
