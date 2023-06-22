import classes from "./Products.module.css";
import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    title: "Laptop 300GB SSD, Intel Core i5-8th",
    description: "very good product",
    imageURL: "https://images.unsplash.com/photo-149674",
    price: 40000,
  },

  {
    id: "2",
    title: "Laptop 500GB SSD,intel core i5-10th",
    description: "Very Useful Product",
    imageURL: "https://images.unsplash.com/photo-150034",
    price: 20000,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy Your Favorite Products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
