import calculateTimeLeft from "../common/functions/calculateTimeLeft";
import i18n from "../common/components/LangConfig";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";

const Deal = () => {


  
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(new Date("2024-10-27T00:00:00"))
  );

  const dealItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.15.title")
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(new Date("2024-10-27T00:00:00")));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-wrap-reverse md:flex-nowrap md:my-10 mt-10 items-center justify-center h-[500px] bg-zinc-500 text-white">
      {/* Left Text Section */}
      <div className="flex flex-col gap-5 items-center  md:items-start p-8 md:w-1/2">
        <h3 className="text-green text-sm">Your All Time Pet Partner</h3>
        <div className="font-semibold text-lg flex flex-row gap-6">
          <p>Support for Comfort: It features soothing and warm faux shag fur supported with 3.2 memory foam.
             This combination distributes weight evenly, providing optimal pressure relief and joint support for you and your pet.
             It aslo pairs with a furry blanket, ensuring you a ultimate comfort for a good rest. Excellent New Relax: Cozzze Human dog bed can provide a new way to enjoy better rest,
              human dog bed can even accommodate you and your pet</p>
        </div>
        <Link
          to={{ pathname: `/allProducts/${dealItem.title}` }}
          key={dealItem.id}
        >
          <button className="bg-green py-4 px-12 rounded ease-in-out duration-300 transform hover:scale-105 hover:-translate-y-1">
            <span>{i18n.t("deal.buyNow")}</span>
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="relative md:w-1/2 h-full">
        <img
          src="https://i.pinimg.com/736x/d9/98/d4/d998d4a1b942a451c52af088b101803e.jpg"
          alt={dealItem.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Deal;
