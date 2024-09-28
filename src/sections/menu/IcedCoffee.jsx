import MenuItem from "./MenuItem";

const icedCoffees = {
  1: {
    name: "Iced Americano",
    price: "3",
  },
  2: {
    name: "Iced Latte",
    price: "3.50",
  },
};

function IcedCoffee({ itemGap }) {
  return (
    <div className={`flex flex-col gap-[${itemGap}]`}>
      {Object.values(icedCoffees).map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default IcedCoffee;
