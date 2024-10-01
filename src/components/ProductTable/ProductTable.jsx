import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "White T-Shirt",
    category: "Clothing",
    price: 25,
    stock: 100,
    sales: 50,
    imageUrl:
      "https://img.freepik.com/free-photo/front-blank-white-tshirt-with-hanger-design_1409-4412.jpg?t=st=1727806656~exp=1727810256~hmac=61a84d52b2d9cfcbe59d4efe0b569d67f197ebf2052b2f56b11806ea022eaafa&w=1060",
  },
  {
    id: 2,
    name: "Black Hoodie",
    category: "Clothing",
    price: 50,
    stock: 50,
    sales: 25,
    imageUrl:
      "https://img.freepik.com/free-photo/young-man-wearing-black-hoodie_1409-5208.jpg?t=st=1727806739~exp=1727810339~hmac=ec7a0d61783534eb1199639e428d0e911321fdca19bc052d5ff404a0f81a5045&w=1480",
  },
  {
    id: 3,
    name: "Blue Jeans",
    category: "Clothing",
    price: 75,
    stock: 75,
    sales: 10,
    imageUrl:
      "https://img.freepik.com/free-photo/jeans_1203-8093.jpg?t=st=1727806814~exp=1727810414~hmac=4db1500d6450ab1520e2e646e778bc45e99a5987a86f0a9ff3ee74fbb3d2f7c8&w=1060",
  },
  {
    id: 4,
    name: "Red Hat",
    category: "Accessories",
    price: 15,
    stock: 25,
    sales: 5,
    imageUrl:
      "https://img.freepik.com/free-photo/woven-knit-hat-rustic-wooden-plank-generated-by-ai_188544-15338.jpg?t=st=1727806889~exp=1727810489~hmac=8a9ae22f8ac98d4f860bc4051df2575950f24a99587eb73f2205a86ff999d3fa&w=1800",
  },
  {
    id: 5,
    name: "Black Sunglasses",
    category: "Accessories",
    price: 20,
    stock: 30,
    sales: 15,
    imageUrl:
      "https://img.freepik.com/free-photo/man-wearing-hoodie-with-hoodie-it_188544-40017.jpg?t=st=1727806241~exp=1727809841~hmac=69f414cc9f9a1a9a1f7ee75b25dbad1c0dfd0e8160706ee2e9d68244f93887fc&w=1800",
  },
  {
    id: 6,
    name: "White Shoes",
    category: "Footwear",
    price: 100,
    stock: 20,
    sales: 10,
    imageUrl:
      "https://img.freepik.com/free-photo/man-wearing-hoodie-with-hoodie-it_188544-40017.jpg?t=st=1727806241~exp=1727809841~hmac=69f414cc9f9a1a9a1f7ee75b25dbad1c0dfd0e8160706ee2e9d68244f93887fc&w=1800",
  },
  {
    id: 7,
    name: "Black Boots",
    category: "Footwear",
    price: 150,
    stock: 10,
    sales: 5,
    imageUrl:
      "https://img.freepik.com/free-photo/man-wearing-hoodie-with-hoodie-it_188544-40017.jpg?t=st=1727806241~exp=1727809841~hmac=69f414cc9f9a1a9a1f7ee75b25dbad1c0dfd0e8160706ee2e9d68244f93887fc&w=1800",
  },
  {
    id: 8,
    name: "White Socks",
    category: "Footwear",
    price: 5,
    stock: 100,
    sales: 50,
    imageUrl:
      "https://img.freepik.com/free-photo/man-wearing-hoodie-with-hoodie-it_188544-40017.jpg?t=st=1727806241~exp=1727809841~hmac=69f414cc9f9a1a9a1f7ee75b25dbad1c0dfd0e8160706ee2e9d68244f93887fc&w=1800",
  },
  {
    id: 9,
    name: "Black Gloves",
    category: "Accessories",
    price: 10,
    stock: 50,
    sales: 25,
    imageUrl:
      "https://img.freepik.com/free-photo/man-wearing-hoodie-with-hoodie-it_188544-40017.jpg?t=st=1727806241~exp=1727809841~hmac=69f414cc9f9a1a9a1f7ee75b25dbad1c0dfd0e8160706ee2e9d68244f93887fc&w=1800",
  },
  {
    id: 10,
    name: "Blue Scarf",
    category: "Accessories",
    price: 30,
    stock: 75,
    sales: 10,
    imageUrl:
      "https://img.freepik.com/free-photo/man-wearing-hoodie-with-hoodie-it_188544-40017.jpg?t=st=1727806241~exp=1727809841~hmac=69f414cc9f9a1a9a1f7ee75b25dbad1c0dfd0e8160706ee2e9d68244f93887fc&w=1800",
  },
];

function ProductTable() {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:justify-between sm:items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Products List</h2>
        <div className="relative">
          <input
            value={searchTerm}
            onChange={handleSearch}
            type="text"
            placeholder="Search products..."
            className="bg-gray-700 text-gray-100 rounded-lg placeholder-gray-400 pl-10 pr-4 py-2 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50"
          />
          <Search
            size={20}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Stock
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-gray-700"
              >
                <td className="py-4 px-6 flex gap-2 items-center whitespace-nowrap text-sm font-medium text-gray-100">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100">
                    {product.category}
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100">
                    ${product.price}
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100">
                    {product.stock}
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100">
                    {product.sales}
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-400 hover:text-gray-100">
                      <Edit size={16} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-100">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default ProductTable;
