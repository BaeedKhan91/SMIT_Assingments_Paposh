import ProductUi from "../ProductUi";

function ProductPriceIncrease(props) {
  const { products } = props;
  
 const resultProducts = products.map((product) => {
    return {
      ...product, 
      price: (product.price * 1.1).toFixed(0 ), 
    };
  });
  

  return (
    <>
      <h3 style={{ textAlign: "center" ,fontSize:"26px"}}>
        {" "}
        Show all products after increasing their price by 10%.
      </h3>
      <ProductUi resultProducts={resultProducts} />
    </>
  );
}

export default ProductPriceIncrease;
