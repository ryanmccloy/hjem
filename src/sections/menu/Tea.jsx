import MenuItem from "./MenuItem";

const teas = {
  1: {
    name: "Tea",
    price: "3",
  },
  2: {
    name: "Loose Leaf / Herbal",
    price: "",
  },
};

function Tea({ itemGap }) {
  return (
    <div className={`flex flex-col gap-[${itemGap}]`}>
      {Object.values(teas).map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default Tea;
