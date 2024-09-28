import MenuItem from "./MenuItem";

const chocolateDrinks = {
  1: {
    name: "Hot Choc",
    price: "3",
  },
  2: {
    name: "Mocha",
    price: "3.5",
  },
};

function Chocolate({ itemGap }) {
  return (
    <div className={`flex flex-col gap-[${itemGap}]`}>
      {Object.values(chocolateDrinks).map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default Chocolate;
