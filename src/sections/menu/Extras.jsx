import MenuItem from "./MenuItem";

const extras = {
  1: {
    name: "Extra Shot",
    price: "1",
  },
};

function Extras({ itemGap }) {
  return (
    <div className={`flex flex-col gap-[${itemGap}]`}>
      {Object.values(extras).map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default Extras;
