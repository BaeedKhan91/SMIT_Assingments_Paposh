import ProductCard from "./ProductCard";

function Products({ products }) {
  return (
    <>
      <div
        className="grid grid-cols-12 gap-2  sm:grid-cols-12
          md:grid-cols-12
          lg:grid-cols-12
          xl:grid-cols-12"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
