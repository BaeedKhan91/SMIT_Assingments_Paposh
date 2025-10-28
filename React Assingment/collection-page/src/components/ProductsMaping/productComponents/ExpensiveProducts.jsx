import ProductUi from "../ProductUi";

function ExpensiveProducts(props) {
  const { products } = props;

  let sortedProducts = [...products].sort((a, b) => b.price - a.price);
  let top3Product = sortedProducts.slice(0, 3);


  return (
    <>
    <h3 style={{textAlign:"center"}}> Show top 3 most expensive products</h3>
      <ProductUi resultProducts={top3Product}/>
      
    </>
  );
}

export default ExpensiveProducts;
