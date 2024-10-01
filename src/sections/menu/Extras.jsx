import { useQuery } from "@tanstack/react-query";
import { square } from "ldrs";

import { fetchDrinksByCategory } from "../../utils/fetchers";
import { EXTRAS, MENU_LOADING_COLOUR } from "../../utils/constants";

import MenuItem from "./MenuItem";

function Extras({ itemGap }) {
  // React Query Call
  const {
    data: drinks,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["drinks_menu", EXTRAS],
    queryFn: () => fetchDrinksByCategory(EXTRAS),
  });

  // Loading animation
  square.register();
  if (isLoading)
    return (
      <l-square size="30" stroke="2" color={MENU_LOADING_COLOUR}></l-square>
    );

  // Error state
  if (error) return <div>Error loading extras</div>;

  // Check if drinks data is present before rendering
  if (!drinks) return null;

  return (
    <div className={`flex flex-col gap-[${itemGap}]`}>
      {drinks.map(
        (drink) =>
          drink.is_available && (
            <MenuItem key={drink.id} name={drink.name} price={drink.price} />
          )
      )}
    </div>
  );
}

export default Extras;
