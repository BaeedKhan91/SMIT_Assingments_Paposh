const products = [
  {
    id: 1,
    image: "./images/p_img11.png",
    title: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight pullover shirt with a round neckline and short sleeves, worn as an outerwear.",
    price: 100,
    category: "Men",
    rating: 4,
  },
  {
    id: 2,
    image: "./images/p_img13.png",
    title: "Women Round Neck Cotton Top",
    description:
      "A lightweight pullover shirt with a round neckline and short sleeves, worn as an outerwear.",
    price: 200,
    category: "Women",
    rating: 5,
  },
  {
    id: 3,
    image: "./images/p_img14.png",
    title: "boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight pullover shirt with a round neckline and short sleeves, worn as an outerwear.",
    price: 300,
    category: "Kids",
    rating: 2,
  },
  {
    id: 4,
    image: "./images/p_img10.png",
    title: " Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight pullover shirt with a round neckline and short sleeves, worn as an outerwear.",
    price: 400,
    category: "Men",
    rating: 5,
  },

  {
    id: 5,
    image: "./images/p_img20.png",
    title: "Women Palazzo Pants with Waist Belt",

    description:
      "A lightweight pullover shirt with a round neckline and short sleeves, worn as an outerwear.",
    price: 500,
    category: "Women",
    rating: 2,
  },

  {
    id: 6,
    image: "./images/p_img16.png",
    title: "Girls Round Neck Cotton Top",
    description:
      "A lightweight pullover shirt with a round neckline and short sleeves, worn as an outerwear.",
    price: 600,
    category: "Kids",
    rating: 4,
  },
  {
    id: 7,
    image: "./images/p_img12.png",
    title: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight pullover shirt with a round neckline and short sleeves, worn as an outerwear.",
    price: 700,
    category: "Men",
    rating: 3,
  },

  {
    id: 8,
    image: "./images/p_img21.png",
    title: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight pullover shirt with a round neckline and short sleeves, worn as an outerwear.",
    price: 800,
    category: "Women",
    rating: 3,
  },
  {
    id: 9,
    image: "./images/p_img18.png",
    title: "boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight pullover shirt with a round neckline and short sleeves, worn as an outerwear.",
    price: 900,
    category: "Kids",
    rating: 3,
  },

  {
    id: 10,
    image: "./images/p_img15.png",
    title: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight pullover shirt with a round neckline and short sleeves, worn as an outerwear.",
    price: 1000,
    category: "Men",
    rating: 1,
  },
  {
    id: 11,
    image: "./images/p_img22.png",
    title: "Women Palazzo Pants with Waist Belt",
    description:
      "A lightweight pullover shirt with a round neckline and short sleeves, worn as an outerwear.",
    price: 1100,
    category: "Women",
    rating: 2,
  },
  {
    id: 12,
    image: "./images/p_img23.png",
    title: "boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight pullover shirt with a round neckline and short sleeves, worn as an outerwear.",
    price: 1200,
    category: "Kids",
    rating: 1,
  },
];

const categories = [
  { id: 1, title: "Men" },
  { id: 2, title: "Women" },
  { id: 3, title: "Kids" },
];

const categoryTitle = categories.map((c)=>c.title)

const productsEl = document.getElementById("products");
const categoryEl = document.getElementById("categoryFilter");
const ratingEl = document.getElementById("ratingFilter");
const sortingEl = document.getElementById("sorting");
const pricingEl = document.getElementById("priceFilter");
const filterEl = document.getElementById("filterButtons");
const proPerPage = document.getElementById("perproducts");





const findRange = () => {
  let min = products[0].price;
  let max = 0;
  
  products.forEach((product) => {
    if (product.price > max) max = product.price;
    if (product.price < min) min = product.price;
  });
  
  return { min, max };
};
const productPrice = findRange()
console.log(productPrice);

// STATES

let selectedCategory = [];
let selectedRating = ''
let price ;
let selectedSorting = ''
let productPerPage;



const filterData = ( data , selectedCategory , selectedRating , selectedPrice , selectedSorting ,productPerPage)=>{
  let filterData = data

  if (selectedCategory.length) {
    filterData = filterData.filter((product)=> selectedCategory.includes(product.category))
  }
   if (selectedRating) {
    filterData = filterData.filter(
      (product) => product.rating >= selectedRating
    );
  }
  if (selectedPrice) {
    filterData = filterData.filter((product)=> product.price <= selectedPrice && product.price >= productPrice.min)
  }
  if (selectedSorting.length) {
    if (selectedSorting === 'price-h-l') {
    filterData = filterData.sort((a, b) => b.price - a.price);
  } else if (selectedSorting === 'price-l-h') {
    filterData = filterData.sort((a, b) => a.price - b.price);
  } else if (selectedSorting === 'rating-h-l') {
    filterData = filterData.sort((a, b) => b.rating - a.rating);
  } else if (selectedSorting === 'rating-l-h') {
    filterData = filterData.sort((a, b) => a.rating - b.rating);
  }
  }
  if (productPerPage) {
    filterData = filterData.slice(0 , productPerPage)
   
    
  }
  // document.querySelector("#clear-btn").classList.remove("hidden")
  return filterData
}
const renderActiveFilters = () => {
  filterEl.innerHTML = "";

  selectedCategory.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "px-2 py-1 rounded-xl border-2 cursor-default font-semibold bg-neutral-300";
    btn.innerText = cat;
    filterEl.appendChild(btn);
  });

  if (selectedRating) {
    const btn = document.createElement("button");
    btn.className = "px-2 py-1 rounded-xl border-2 cursor-default font-semibold bg-neutral-300";
    btn.innerText = `Rating ${selectedRating}+`;
    filterEl.appendChild(btn);
  }
  if (price && price !== productPrice.max) {
    const btn = document.createElement("button");
    btn.className = "px-2 py-1 rounded-xl border-2 cursor-default font-semibold bg-neutral-300";
    btn.innerText = `Price  ${price}`;
    filterEl.appendChild(btn);
  }
  if (productPerPage) {
     const btn = document.createElement("button");
    btn.className = "px-2 py-1 rounded-xl border-2 cursor-default font-semibold bg-neutral-300";
    btn.innerHTML = `Products Per Page ${productPerPage}`;
    filterEl.appendChild(btn);
  }
  if (selectedSorting) {
     const btn = document.createElement("button");
    btn.className = "px-2 py-1 rounded-xl border-2 cursor-default font-semibold bg-neutral-300";
    btn.innerText = `Sorted By ${selectedSorting}`;
    filterEl.appendChild(btn);
  }
  const clearBtn = document.createElement("button");
  clearBtn.className = "px-2 py-1 rounded-xl border-2 cursor-pointer font-semibold text-red-500 border-red-400 hover:bg-red-200";
  clearBtn.innerText = "Clear X";
  clearBtn.onclick = clearAllFilters;
  filterEl.appendChild(clearBtn); 
};  

const clearAllFilters = () => {
  selectedCategory = [];
  selectedRating = '';
  price = undefined;
  selectedSorting = '';
  productPerPage = undefined;

    document.querySelectorAll('#categoryFilter input[type="checkbox"]').forEach(input => input.checked = false);
    document.querySelector('#perPage').value = 6;
    document.querySelector('#priceFilter input[type="range"]').value = productPrice.max;
    document.querySelector('#sorting select').value = 'price-l-h';
    //     document.querySelectorAll('#ratingFilter input[type="checkbox"]').forEach((input) => {
      //     input.checked = false;
      // });
      renderProducts();
      renderActiveFilters();
      filterEl.innerHTML =''
};


const renderProductsPerPage = () => {
  proPerPage.innerHTML= `<label for="perPage" class="mr-2">Products per page:</label>
  <select id="perPage" class="border-2 border-neutral-200 px-1 rounded" onchange="onChangeProPerPage(this.value)">
    <option value="3">3</option>
    <option value="6" selected>6</option>
    <option value="9">9</option>
    <option value="12">12</option>
  </select>`
}


const renderPricingFilter = ()=>{
  pricingEl.innerHTML = ` <div class="w-full">
                    <input type="range" max="${productPrice.max }" min="${productPrice.min}" value="1200" onchange="onChangePrice(this.value)" >
                    <div class="flex justify-between">
                        <span>${productPrice.min}</span>
                        <span>${productPrice.max}</span>
                    </div>
                </div>`
}
const renderSorting = () => {
  sortingEl.innerHTML = ` <select name="" id="" onchange="onChangeSorting(this.value)"class="border-neutral-200 border-2 rounded text-m font-semibold mr-2 mb-2">
            <option value="price-l-h">Price Low To High</option>
            <option value="price-h-l">Price High To Low</option>
            <option value="rating-l-h">Rating Low To High</option>
            <option value="rating-h-l">Rating High To Low</option>
          </select>`;
};


const onChangeProPerPage=(value)=>{
  productPerPage = +value
  console.log(productPerPage);
   console.log(typeof(productPerPage));
  renderProducts()
  renderActiveFilters()
}
const onChangePrice =(value)=>{
  price = +value
  // productPrice.max = +value
  console.log(price);
  // renderPricingFilter()
  renderProducts()
  renderActiveFilters()
}
const onChangeSorting = (value) => {
  selectedSorting = value
  console.log(selectedSorting);
  renderProducts()
  renderActiveFilters()
};

const onChangeCategory = (category, ischecked) => {
  // console.log(category, ischecked);
  if(ischecked){
    selectedCategory.push(category)
  }
  else{
    selectedCategory= selectedCategory.filter((f)=>f !== category)
  }
  renderProducts()
  renderActiveFilters()
  console.log(selectedCategory);
};

const onChangeRatingHandler = (rating) => {
  // console.log(rating);
  selectedRating = rating;
  console.log("selectedRating", selectedRating);

  renderRating();
  renderProducts();
  renderActiveFilters()
}; 



const renderRating = () => {
  ratingEl.innerHTML = [1, 2, 3, 4, 5]
    .map(
      (rating) => `<div class="flex items-center gap-2 cursor-pointer "onclick="onChangeRatingHandler(${rating})">
                    <div class="flex justify-start">
                     ${Array(5)
                       .fill()
                       .map(
                         (_, i) => `
                   <svg
                   xmlns="http://www.w3.org/2000/svg"
                   class="size-6  ${
                     i < rating ? "text-yellow-400" : "text-gray-300"
                       } ${rating == selectedRating ? "!text-red-400" : ""}"
                   fill="currentColor"
                   viewBox="0 0 24 24"
                   stroke-width="1.5"
                   stroke="currentColor"
                   >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                      </svg>`
                       )
                       .join("")}</div>
                    <p class="text-gray-400">${rating}</p>
                </div>
    `
    )
    .join("");
};

const renderCategories = () => {
  categoryEl.innerHTML = categoryTitle
    .map(
      (category) => ` <div class="relative flex items-center">
                    <div class="flex items-center h-5">
                        <input type="checkbox" onchange="onChangeCategory('${category}', this.checked)" class="h-4 w-4 rounded cursor-pointer" id="${category}">
                    </div>
                    <label for="${category}" class="ml-3 text-md text-black cursor-pointer font-medium">
                        ${category}
                    </label>
                </div>`
    )
    .join("");
};

const renderProducts = () => {

  const visibleProducts = filterData(products, selectedCategory , selectedRating ,price, selectedSorting, productPerPage)
  productsEl.innerHTML = visibleProducts
    .map(
      (product) => `  <div class="col-span-3">
            <div class="rounded-xl shadow-xl">
              <div class="flex flex-col">
                <img src="${product.image}" alt="${product.title}" />
                <div class="relative p-3 space-y-2 h-48 text-black bg-neutral-50">
                  <h1 class="text-xl font-bold text-shadow-md">
                    ${product.title}
                  </h1>
                  <div class="flex items-center gap-2 font-semibold">
                    <div class="flex justify-start">
                   ${Array(5)
                     .fill()
                     .map(
                       (_, i) => `
                   <svg
                   xmlns="http://www.w3.org/2000/svg"
                   class="size-6  ${
                     i < product.rating ? "text-yellow-400" : "text-gray-300"
                   }"
                   fill="currentColor"
                   viewBox="0 0 24 24"
                   stroke-width="1.5"
                   stroke="currentColor"
                   >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                      </svg>`
                     )
                     .join("")}
                          </div>
                    (${product.rating})
                  </div>
                  <p class="max-h-24 overflow-hidden font-medium">
                   ${product.description}
                  </p>
                  <div
                    class="absolute bottom-2 w-full flex justify-between items-center pr-6"
                  >
                    <span class="text-black text-xl font-bold">$${
                      product.price
                    }</span>
                    <button
                      class="cursor-pointer transition-all duration-1000 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>`
    )
    .join("");
};

renderProducts();
renderCategories();
renderRating();
renderSorting();
renderPricingFilter()
renderProductsPerPage()