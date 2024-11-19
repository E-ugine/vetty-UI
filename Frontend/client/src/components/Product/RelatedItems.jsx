/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import i18n from "../common/components/LangConfig";
import FlashSaleItem from "../common/components/FlashSaleItem";
import RedTitle from "../common/components/RedTitle";
import ViewAll from "../common/components/ViewAll";
import { Grid } from "@mui/material";
const RelatedItems = ({ selectedProduct }) => {

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    fetch('https://vetty-backend-s1mr.onrender.com//products')
    .then((r)=>r.json())
    .then((data)=>{
      setProducts(data)
    })
  },[])

  const relatedItems = products.filter(
    (item) =>
      item.type == selectedProduct.type && item.title !== selectedProduct.title
  );

  return (
    <>
      <div className="mx-auto md:mx-2">
        <RedTitle title={i18n.t("productPage.relatedItems")} />
        <div className="relative mt-10 flex flex-row gap-2 md:gap-12 transition-transform duration-300 transform ">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {relatedItems.map((item, index) => (
              <Grid item key={item.id}>
                <FlashSaleItem
                  item={item}
                  index={index}
                  totalItems={relatedItems.length}
                  stars={item.stars}
                  rates={item.rates}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <ViewAll name={i18n.t("redButtons.viewAllProducts")} />
      </div>
    </>
  );
};

export default RelatedItems;
