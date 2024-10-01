import supabase from "./supabaseClient";

// fetching drinks menu items by category
export const fetchDrinksByCategory = async (category) => {
  let { data: drinks, error } = await supabase
    .from("drinks_menu")
    .select("*")
    .eq("category", category)
    .order("id", { ascending: true });

  if (error) throw error;

  return drinks;
};

export const fetchCafeEvents = async () => {
  let { data: cafeEvents, error } = await supabase
    .from("cafe_events")
    .select("*")
    .order("date", { ascending: true });

  if (error) throw error;

  return cafeEvents;
};
