const products = [
  {
    id: 1,
    image: "./images/p_img11.png",
    title: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    category: "Men",
    rating: 4,
  },
  {
    id: 2,
    image: "./images/p_img13.png",
    title: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    category: "women",
    rating: 5,
  },
  {
    id: 3,
    image: "./images/p_img14.png",
    title: "boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 300,
    category: "kids",
    rating: 2,
  },
  {
    id: 4,
    image: "./images/p_img10.png",
    title: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 400,
    category: "Men",
    rating: 5,
  },

  {
    id: 5,
    image: "./images/p_img20.png",
    title: "Women Palazzo Pants with Waist Belt",

    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 500,
    category: "women",
    rating: 2,
  },

  {
    id: 6,
    image: "./images/p_img16.png",
    title: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 600,
    category: "kids",
    rating: 4,
  },
  {
    id: 7,
    image: "./images/p_img12.png",
    title: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 700,
    category: "Men",
    rating: 3,
  },

  {
    id: 8,
    image: "./images/p_img21.png",
    title: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 800,
    category: "women",
    rating: 3,
  },
  {
    id: 9,
    image: "./images/p_img18.png",
    title: "boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 900,
    category: "kids",
    rating: 3,
  },

  {
    id: 10,
    image: "./images/p_img15.png",
    title: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 1000,
    category: "Men",
    rating: 1,
  },
  {
    id: 11,
    image: "./images/p_img22.png",
    title: "Women Palazzo Pants with Waist Belt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 1100,
    category: "women",
    rating: 2,
  },
  {
    id: 12,
    image: "./images/p_img23.png",
    title: "boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 1200,
    category: "kids",
    rating: 1,
  },
];


const test = document.getElementById("cont");

const render = () => {
  test.innerHTML = products
    .map((product) => {
      return `
        <div class="border p-4 m-2">
          <img src="${product.image}" alt="${product.title}" class="w-40 h-40 object-cover mb-2" />
          <h2 class="text-lg font-semibold">${product.title}</h2>
          <p class="text-sm text-gray-600">${product.description}</p>
          <p class="text-md font-bold">Price: Rs. ${product.price}</p>
          <p class="text-sm">Rating: ${product.rating} ⭐</p>
        </div>
      `;
    })
    .join(""); // .join("") is important to combine all HTML into a single string
};

render();
  