import { selectedProduct, setSelectedProduct } from "./helper";

export default function ProductDetails({ selectedProduct }) {
  return (
    <div className="detail">
      <ProductDetails selectedProduct={selectedProduct} />
    </div>
  );
}
