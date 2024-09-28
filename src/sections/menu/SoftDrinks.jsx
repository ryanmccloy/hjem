import MenuItem from "./MenuItem";

const softDrinks = {
  1: {
    name: "Water",
    price: "2",
  },
  2: {
    name: "Still / Sparkling",
    price: "",
  },
  3: {
    name: "Soda + Juice",
    price: "2.5",
  },
};

function SoftDrinks({ itemGap }) {
  return (
    <div className={`flex flex-col gap-[${itemGap}]`}>
      {Object.values(softDrinks).map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default SoftDrinks;
