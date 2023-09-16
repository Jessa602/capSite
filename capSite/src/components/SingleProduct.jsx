import { useState, useEffect } from "react";
import { getProducts, getProduct } from "./helper";

export default function getSingleProduct() {
  const [product, setProduct] = useState({});
  const [selectedProduct, setSelectedProduct] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchSingleProduct = async () => {
    try {
      const results = await getProduct();
      setProduct(results);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);
  return (
    <div className="card">
      {product.map((product) => (
        <div className="card-body">
          <img src={product.image} className="card-img-top" alt="..." />
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
          {/* <p className="card-text">{product.description}</p> */}
          <p className="card-text">{product.price}</p>

          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      ))}
    </div>
  );
}
