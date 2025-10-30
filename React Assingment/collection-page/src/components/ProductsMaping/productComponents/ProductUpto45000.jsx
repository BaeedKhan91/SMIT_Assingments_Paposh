import ProductUi from "../ProductUi";

function ProductUpto45000(props) {
    const {products} = props
    
    let filteredProduct = products.filter((product)=>product.price > 45000)
    let sortedProduct = [...filteredProduct].sort((a,b)=>b.price - a.price)
    

  

    
 return (
    <>
    <h3 style={{textAlign:"center",fontSize:"26px"}}>  Show only those products whose price is greater than 45000, sorted by price (high to low)</h3>
      <ProductUi resultProducts={sortedProduct}/>
      
    </>
  );
}

export default ProductUpto45000