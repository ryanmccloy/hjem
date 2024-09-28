import HotCoffee from "./HotCoffee";
import IcedCoffee from "./IcedCoffee";
import Extras from "./Extras";
import Tea from "./Tea";
import Chocolate from "./Chocolate";
import SoftDrinks from "./SoftDrinks";

const itemGap = "15px";

function DrinkMenu() {
  return (
    <div className="font-primary text-[14px] tracking-wider flex gap-[15%] ">
      <div className="w-2/5 flex flex-col gap-[30px]">
        <HotCoffee itemGap={itemGap} />
        <IcedCoffee itemGap={itemGap} />
        <Extras itemGap={itemGap} />
      </div>

      <div className="w-2/5 flex flex-col gap-[40px]">
        <Tea itemGap={itemGap} />
        <Chocolate itemGap={itemGap} />
        <SoftDrinks itemGap={itemGap} />
      </div>
    </div>
  );
}

export default DrinkMenu;
