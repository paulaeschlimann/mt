import { useEffect, useState } from "react";

export default function ProductList(props) {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data.products));
  }, []);

  return (
    <>
      {productData &&
        productData.map((product) => {
          return <div key={product.id}>{product.title}</div>;
        })}
      <section>ProductList is mounted!</section>
    </>
  );
}
