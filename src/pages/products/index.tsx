import "./style.css";
import { useEffect, useState } from "react";
import { Product, getProducts } from "@acc/api";
import ProductsGrid from "./components/ProductsGrid";

function ProductPage() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTimeout(async () => {
      //set time out added to get the loading effects
      const productsDetails = await getProducts();
      setProducts(productsDetails.products);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <div>
        <h1>All Products </h1>
        <div>
          {isLoading ? (
            <div
              id="loader"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            ></div>
          ) : (
            <>
              <ProductsGrid products={products} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
