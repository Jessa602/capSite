import { useState, useEffect } from "react";
import { getProducts, getProduct } from "./helper";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [selectedProduct, setSelectedProduct] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const results = await getProducts();
      setProducts(results);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div>
      {selectedProduct.name ? (
        <ProductDetails product={selectedProduct} />
      ) : (
        products.map((product, index) => (
          <div className="card">
            <SingleProduct
              key={index}
              productData={product}
              setSelectedProduct={setSelectedProduct}
            />
          </div>
        ))
      )}
    </div>
  );
}
