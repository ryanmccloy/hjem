import DrinkMenu from "./DrinkMenu";
import MenuParagraphs from "./MenuParagraphs";

function MenuContentLarge() {
  return (
    <div className=" h-full flex gap-[60px]">
      <div className=" w-1/6 relative overflow-hidden">
        <img
          className="absolute inset-0 h-full  w-full  object-cover "
          src="/images/menularge.jpg"
          alt="Coffee on a bench"
        />
      </div>

      <div className="py-[60px] pr-[30px] flex-1">
        <h2 className="text-right pb-[60px]">MENU.</h2>

        <div className="flex justify-between gap-[120px]">
          <div>
            <DrinkMenu />
            <p className="pt-[60px]">
              Visit us in store to try any of our seasonal or signature drinks
              :)
            </p>
          </div>
          <div>
            <MenuParagraphs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuContentLarge;
