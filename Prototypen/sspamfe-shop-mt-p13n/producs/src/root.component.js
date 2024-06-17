import ProductList from "./product-list.component.js";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <ProductList />
    </section>
  );
}
