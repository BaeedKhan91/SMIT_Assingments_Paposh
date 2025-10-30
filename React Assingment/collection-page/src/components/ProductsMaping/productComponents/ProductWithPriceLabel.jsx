import ProductUi from "../ProductUi";

function ProductWithPriceLabel(props) {
  const { products } = props;

  function average() {
    let sum = products.reduce((sum, acc) => sum + acc.price, 0);

    return sum / products.length;
  }

  console.log(average());
  let avg = average();
  const resultProducts = products.map((product) => {
    return {
      ...product,
      isaboveAvg: product.price > avg ? true : false,
    };
    // console.log(product);
  });
  console.log(resultProducts);

  return (
    <>
      <h3 style={{textAlign:"center",fontSize:"26px"}}>  Show all products with price labeled as (Below average or Above average)</h3>
      <ProductUi average={true} resultProducts={resultProducts}/>
    </>
  );
}

export default ProductWithPriceLabel;
