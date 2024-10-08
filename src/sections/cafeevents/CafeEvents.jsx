import EventsContainer from "./EventsContainer";

function CafeEvents() {
  return (
    <section
      id="cafeevents"
      className="pt-[30px] pb-[60px] px-[15px] md:pt-[60px] md:px-[30px] md:pb-[90px]"
    >
      <h2 className="text-right pb-[30px] md:pb-[60px]">EVENTS.</h2>

      <EventsContainer />
    </section>
  );
}

export default CafeEvents;
