import "./ProductUi.css";

function ProductUi(props) {
  const { resultProducts , average = false } = props;

  return (
    <>
    <div className="container">
      {resultProducts.map((product, index) => (
        
        <div className="product-card" key={index}>
         
          
          <h1 className="product-name"> {product.name}</h1>
          <h3 className="product-price">
            <span>Price: </span>
            {product.price}
          </h3>
          <p className="product-status">
            <span>availablity: </span>{" "}
            {product.available ? "Available" : "Not Available"}
          </p>
          <p style={{fontWeight:"bold"}}>

          {average ? product.isaboveAvg ? "AboveAverage" : "Below average" : ""}
          </p>
           
        </div>
      ))}
    </div>
      <hr />
      </>
  );
}

export default ProductUi;
