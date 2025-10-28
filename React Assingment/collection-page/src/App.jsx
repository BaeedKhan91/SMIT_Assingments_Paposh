import ExpensiveProducts from "./components/ProductsMaping/productComponents/ExpensiveProducts";
import PriceLowToHigh from "./components/ProductsMaping/productComponents/PriceLowToHigh";
import ProductUpto45000 from "./components/ProductsMaping/productComponents/ProductUpto45000";
import Productui from "./components/ProductsMaping/ProductUi";
import Result from "./components/StudentResult/Result";

function App() {
  let students = [
    {
      name: "baeed",
      marks: 60,
      present: true,
    },
    {
      name: "ahmed",
      marks: 70,
      present: true,
    },
    {
      name: "abeer",
      marks: 40,
      present: false,
    },
  ];
  let products = [
    {
      name: "Mobile",
      price: 25000,
      available: true,
    },
    {
      name: "Laptop",
      price: 49000,
      available: false,
    },
    {
      name: "Moniter",
      price: 34000,
      available: true,
    },
    {
      name: "MotherBoard",
      price: 56000,
      available: true,
    },
  ];
  // return students.map((s ,index) => <div key={index}>
  //   <Result name={s.name} marks={s.marks} present={s.present} />
  //   <hr />
  // </div>
  // )
 

  return(
 <>
    <ExpensiveProducts products={products}/>
    <PriceLowToHigh products={products}/>
    <ProductUpto45000 products={products}/>
 </>
  ) 
    
}

export default App;
