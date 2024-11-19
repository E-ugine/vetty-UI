import Row1 from "../components/Home/Row1";
import Deal from "../components/Home/Deal";
import FlashSale from "../components/Home/FlashSale";
// import BestSelling from "../components/Home/BestSelling";
// import Categories from "../components/Home/Categories";
import Services from "../components/common/components/Services";
import AllProducts from "../components/Home/AllProducts";
// import Featured from "../components/Home/Featured";
// import { ITEMS } from "../components/common/functions/items";
import { useState, useEffect} from "react";
const Home = () => {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    fetch('https://vetty-backend-s1mr.onrender.com//products')
    .then((r)=>r.json())
    .then((data)=>{
      setProducts(data)
    })
  },[])

  return (
    <div dir="ltr" className="flex flex-col xl:mx-32 mt-28 gap-3">
      <Row1 />
      <FlashSale />
      {/* <Categories /> */}
      {/* <BestSelling item={products} /> */}
      <Deal />
      <AllProducts items={products} />
      {/* <Featured /> */}
      <Services />
    </div>
  );
};

export default Home;
