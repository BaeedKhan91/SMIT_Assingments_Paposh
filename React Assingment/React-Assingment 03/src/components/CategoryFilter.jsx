import { categoryTitle } from "../data/Category";
import Checkbox from "./Checkbox";

function CategoryFilter({ selectedCategory, onChangeCategory }) {
  return (
    <>
      <div className="
        text-black rounded-md py-2 px-4 shadow-lg
        sm:py-3 sm:px-4
      ">
        <h3 className="font-bold text-base sm:text-lg">Category filter</h3>

        <div
          className="mt-3 space-y-2 sm:space-y-3"
          id="categoryFilter"
        >
          {categoryTitle.map((category, i) => (
            <Checkbox
              text={category}
              key={i}
              id={i}
              checked={selectedCategory.includes(category)}
              onChange={(e) => onChangeCategory(category, e.target.checked)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryFilter;
