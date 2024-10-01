import { useQuery } from "@tanstack/react-query";
import { square } from "ldrs";

import { fetchDrinksByCategory } from "../../utils/fetchers";
import { SOFT_DRINKS, MENU_LOADING_COLOUR } from "../../utils/constants";

import MenuItem from "./MenuItem";

function SoftDrinks({ itemGap }) {
  // React Query Call
  const {
    data: drinks,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["drinks_menu", SOFT_DRINKS],
    queryFn: () => fetchDrinksByCategory(SOFT_DRINKS),
  });

  // Loading animation
  square.register();
  if (isLoading)
    return (
      <l-square size="30" stroke="2" color={MENU_LOADING_COLOUR}></l-square>
    );

  // Error state
  if (error) return <div>Error loading soft drinks</div>;

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

export default SoftDrinks;
