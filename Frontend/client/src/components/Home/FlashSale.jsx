import FlashSaleItem from "../common/components/FlashSaleItem";
import { useState, useEffect } from "react";
import RedTitle from "../common/components/RedTitle";
import Arrows from "../common/components/Arrows";
import ViewAll from "../common/components/ViewAll";
import calculateTimeLeft from "../common/functions/calculateTimeLeft";
import i18n from "../common/components/LangConfig";

const FlashSale = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('https://vetty-backend-s1mr.onrender.com//products')
    .then((r)=>r.json())
    .then((data)=>{
     setProducts(data)
    })
  },[])

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(new Date("2024-10-27T00:00:00"))
  );
  const saleItems = products.filter((item) => item.discount !== "");
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(new Date("2024-10-27T00:00:00")));
    }, 1000);
  
    return () => clearInterval(timer); 
  }, []); 
  

  return (
    <div className=" p-4 ">
      <RedTitle title={i18n.t("homeSections.row2.0")} />
      <div className="flex md:justify-between items-center md:mr-6 md:mb-4">
        <div className="flex gap-10 md:gap-20 flex-col md:flex-row ">
          
          
        </div>
        <Arrows />
      </div>

      <div className="scrollbar relative  md:overflow-x-hidden hover:overflow-scroll  overflow-y-hidden flex justify-start items-center h-[500px] md:h-[400px] ">
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
