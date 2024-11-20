import FlashSaleItem from "../common/components/FlashSaleItem";
import { useState, useEffect } from "react";
import RedTitle from "../common/components/RedTitle";
import Arrows from "../common/components/Arrows";
import ViewAll from "../common/components/ViewAll";
import i18n from "../common/components/LangConfig";

const calculateTimeLeft = (endTime) => {
  const now = new Date();
  const difference = endTime - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const FlashSale = () => {
  const [products, setProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(new Date("2024-10-27T00:00:00"))
  );

  // Fetch Products
  useEffect(() => {
    fetch("https://vetty-backend-s1mr.onrender.com/products")
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(new Date("2024-11-27T00:00:00")));
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer
  }, []);

  const saleItems = products.filter((item) => item.discount !== "");

  const formatTimeLeft = () => {
    const { days, hours, minutes, seconds } = timeLeft;

    return (
      <div className="flex gap-4 justify-center items-center text-center bg-[#003135] max-w-100 text-white p-4 rounded-md">
        <div className="flex flex-col">
          <span className="font-bold text-lg">{days}</span>
          <span className="text-sm">{i18n.t("days")}</span>
        </div>
        <span>:</span>
        <div className="flex flex-col">
          <span className="font-bold text-lg">{hours}</span>
          <span className="text-sm">{i18n.t("hours")}</span>
        </div>
        <span>:</span>
        <div className="flex flex-col">
          <span className="font-bold text-lg">{minutes}</span>
          <span className="text-sm">{i18n.t("minutes")}</span>
        </div>
        <span>:</span>
        <div className="flex flex-col">
          <span className="font-bold text-lg">{seconds}</span>
          <span className="text-sm">{i18n.t("seconds")}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4">
      <RedTitle title={i18n.t("homeSections.row2.0")} />
      <div className="mt-4">{formatTimeLeft()}</div> {/* Time Left Display */}
      <div className="flex md:justify-between items-center md:mr-6 md:mb-4 mt-4">
        <div className="flex gap-10 md:gap-20 flex-col md:flex-row"></div>
        <Arrows />
      </div>

      <div className="scrollbar relative md:overflow-x-hidden hover:overflow-scroll overflow-y-hidden flex justify-start items-center h-[500px] md:h-[400px]">
        {saleItems.map((item, index) => (
          <FlashSaleItem
            key={item.id}
            item={item}
            index={index}
            totalItems={saleItems.length}
            stars={item.stars}
            rates={item.rates}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <ViewAll name={i18n.t("redButtons.viewAllProducts")} />
      </div>
      <hr className="mx-40 border-gray-300 md:mt-16" />
    </div>
  );
};

export default FlashSale;
