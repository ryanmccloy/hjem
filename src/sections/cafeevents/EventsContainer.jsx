import { useQuery } from "@tanstack/react-query";
import { fetchCafeEvents } from "../../utils/fetchers";
import { EVENTS_LOADING_COLOUR } from "../../utils/constants";

import { square } from "ldrs";

import Event from "./Event";

function EventsContainer() {
  const {
    data: cafeEvents,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["cafe_events"],
    queryFn: () => fetchCafeEvents(),
  });

  // Loading animation
  square.register();
  if (isLoading)
    return (
      <l-square size="30" stroke="2" color={EVENTS_LOADING_COLOUR}></l-square>
    );

  // Error state
  if (error) return <div>Error loading upcoming events</div>;

  // Check if drinks data is present before rendering
  if (!cafeEvents) return <h3>No upcoming cafe event :( </h3>;

  return (
    <div className="flex gap-[15px] flex-wrap">
      {cafeEvents.map((event) => (
        <Event
          key={event.id}
          name={event.name}
          date={event.date}
          image_url={event.image_url}
        />
      ))}
    </div>
  );
}

export default EventsContainer;
