import Event from "./Event";

function EventsContainer() {
  return (
    <div className="flex gap-[15px] flex-wrap">
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  );
}

export default EventsContainer;
