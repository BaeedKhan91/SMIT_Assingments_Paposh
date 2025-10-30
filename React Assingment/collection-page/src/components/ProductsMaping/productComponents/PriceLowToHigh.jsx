import Productui from "../ProductUi";

function PriceLowToHigh(props) {
  const { products } = props;

  const lowToHigh = [...products].sort((a, b) => a.price - b.price);

  return (
    <>
     <h3 style={{textAlign:"center" ,fontSize:"26px"}}>Show all products by sorting on price (low high)</h3>
     <Productui resultProducts = {lowToHigh}/>
      
    </>
  );
}

export default PriceLowToHigh;
