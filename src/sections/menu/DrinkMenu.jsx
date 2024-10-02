import HotCoffee from "./HotCoffee";
import IcedCoffee from "./IcedCoffee";
import Extras from "./Extras";
import Tea from "./Tea";
import Chocolate from "./Chocolate";
import SoftDrinks from "./SoftDrinks";

const itemGap = "15px";

function DrinkMenu() {
  return (
    <div className="font-primary text-[14px] md:text-[18px]  tracking-wider flex gap-[60px] md:gap-[90px] ">
      <div className="w-[140px] md:w-[250px] flex flex-col gap-[30px]">
        <HotCoffee itemGap={itemGap} />
        <IcedCoffee itemGap={itemGap} />
        <Extras itemGap={itemGap} />
      </div>

      <div className="w-[150px] flex flex-col gap-[30px]">
        <Tea itemGap={itemGap} />
        <Chocolate itemGap={itemGap} />
        <SoftDrinks itemGap={itemGap} />
      </div>
    </div>
  );
}

export default DrinkMenu;
