import { NextPage } from "next";
import { ProductTableSection } from "../components/molecules/ProductTableSection";
import { PRODUCTS } from "../content/products";
import { MENU_COPY } from "../content/menuCopy"; 

const Menu: NextPage = () => {
  return (
    <div className="bg-[url('/ai-tomato-plant.jpg')] bg-cover"> 
      <div className="container mx-auto">
        <ProductTableSection products={PRODUCTS} copy={MENU_COPY[0]}/>
      </div>
    </div>
  );
};

export default Menu;
