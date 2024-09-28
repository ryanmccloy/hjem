import MenuItem from "./MenuItem";

const hotCoffees = {
  1: {
    name: "Double Espresso",
    price: "3",
  },
  2: {
    name: "Americano",
    price: "3",
  },
  3: {
    name: "Cappuccino",
    price: "3.5",
  },
  4: {
    name: "Cortado",
    price: "3.3",
  },
  5: {
    name: "Flat White",
    price: "3.5",
  },
  6: {
    name: "Latte",
    price: "3.5",
  },
  7: {
    name: "Chai Latte",
    price: "3",
  },
};

function HotCoffee({ itemGap }) {
  return (
    <div className={`flex flex-col gap-[${itemGap}]`}>
      {Object.values(hotCoffees).map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default HotCoffee;
