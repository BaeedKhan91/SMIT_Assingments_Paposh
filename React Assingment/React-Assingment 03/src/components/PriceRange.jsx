function PriceRange({ rangeValue, onChangePrice }) {
  return (
    <div className="text-black rounded-md py-2 px-4 shadow-lg">
      <h3 className="font-bold">Price Filter</h3>

      <div className="mt-3 space-y-3">
      
        <input
          type="range"
          min="100"
          max="1200"
          value={rangeValue}
          onChange={(e) => onChangePrice(e.target.value)}
          className="
            w-full   h-2 bg-gray-200 rounded-lg 
            
          "
        />

       
        <div className="flex justify-between text-sm font-medium text-gray-600 sm:flex-wrap">
          <p>$100</p>
          <p>${rangeValue}</p>
        </div>
      </div>
    </div>
  );
}

export default PriceRange;
