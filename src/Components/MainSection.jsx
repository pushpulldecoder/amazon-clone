import {ProductCard} from "./ProductCard";
import PrimeSlider from "./PrimeSlider";

const MainSection = () => {
  return (
    <>
      <div id="container">
        <PrimeSlider/>
        <div className="product-gallery">
        <ProductCard
          title="Up to 70% off | Clearance store"
          img="../image/ProductImage/b1.jpg"
          offer="Shop Now"
        />
        <ProductCard
          title="Amazon pay Book Travel Tickets"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
          offer="Shop Now"
        />
        </div>
        <div className="product-gallery">
        <ProductCard
          title="Bluetooth Calling Smartwatch starts at ₹1,999"
          img="../image/ProductImage/b2.jpg"
          offer="Shop Now"
        />
        <ProductCard
          title="Amazon pay Book Travel Tickets"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
          offer="Shop Now"
        />
        </div>

      </div>
    </>
  );
};

export default MainSection;
