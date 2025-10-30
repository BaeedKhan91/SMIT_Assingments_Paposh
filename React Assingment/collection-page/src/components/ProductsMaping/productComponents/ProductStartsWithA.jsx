import ProductUi from "../ProductUi";

function ProductStartsWithA(props) {
    const {products} = props
    const filteredProduct = products.filter((product)=> product.name.charAt(0) === "A" || product.name.charAt(0) === "a")
   
    
   return (
    <>
      <h3 style={{ textAlign: "center",fontSize:"26px" }}>
        {" "}
         Show all products whose name starts with 'a' or 'A'
      </h3>
      <ProductUi resultProducts={filteredProduct} />
    </>
  );
}

export default ProductStartsWithA