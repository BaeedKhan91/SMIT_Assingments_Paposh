import React from "react";
import { useParams } from "react-router";
import { products } from "../data/products";

function ProductsDetails() {
  const params = useParams();
  let visibleProduct = [...products];

  visibleProduct = visibleProduct.find((product) => product.id === +params.id);
  console.log(visibleProduct);

  console.log(params);

  return (
    <div className=" pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full overflow-hidden"></div>
          <div className="w-full sm:w-[80%]">
            <img
              src={visibleProduct.image}
              alt={visibleProduct.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{visibleProduct.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 ${
                  i <= visibleProduct.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            ))}
            <p className="pl-2 text-sm text-gray-500">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">${visibleProduct.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {visibleProduct.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2 flex-wrap">
              {visibleProduct.sizes.map((size, idx) => (
                <button
                  key={idx}
                  className="border py-2 px-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=>alert("Successfully Added to Cart")} className="bg-black text-white px-8 py-3 active:bg-gray-700 cursor-pointer transition">
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this Product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
