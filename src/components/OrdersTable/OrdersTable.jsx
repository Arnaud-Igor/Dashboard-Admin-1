import { motion } from "framer-motion";
import { Eye, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const ORDER_DATA = [
  {
    id: 1,
    OrderID: "ORDER01",
    Customer: "John Doe",
    Date: "2024-09-01",
    Total: "$100",
    Status: "Pending",
  },
  {
    id: 2,
    OrderID: "ORDER02",
    Customer: "Jane Doe",
    Date: "2024-09-02",
    Total: "$200",
    Status: "Completed",
  },
  {
    id: 3,
    OrderID: "ORDER03",
    Customer: "Alice Eve",
    Date: "2024-09-03",
    Total: "$300",
    Status: "Completed",
  },
  {
    id: 4,
    OrderID: "ORDER04",
    Customer: "Bob Smith",
    Date: "2024-09-04",
    Total: "$400",
    Status: "Completed",
  },
  {
    id: 5,
    OrderID: "ORDER05",
    Customer: "Jerry King",
    Date: "2024-09-05",
    Total: "$500",
    Status: "Pending",
  },
  {
    id: 6,
    OrderID: "ORDER06",
    Customer: "Chris Brown",
    Date: "2024-09-06",
    Total: "$600",
    Status: "Pending",
  },
  {
    id: 7,
    OrderID: "ORDER07",
    Customer: "Tom Cruise",
    Date: "2024-09-07",
    Total: "$700",
    Status: "Pending",
  },
  {
    id: 8,
    OrderID: "ORDER08",
    Customer: "Will Smith",
    Date: "2024-09-08",
    Total: "$800",
    Status: "Completed",
  },
  {
    id: 9,
    OrderID: "ORDER09",
    Customer: "Brad Pitt",
    Date: "2024-09-09",
    Total: "$900",
    Status: "Pending",
  },
  {
    id: 10,
    OrderID: "ORDER010",
    Customer: "Angelina Jolie",
    Date: "2024-09-10",
    Total: "$1000",
    Status: "Completed",
  },
  {
    id: 11,
    OrderID: "ORDER011",
    Customer: "Jennifer Aniston",
    Date: "2024-09-11",
    Total: "$1100",
    Status: "Completed",
  },
  {
    id: 12,
    OrderID: "ORDER012",
    Customer: "Jennifer Lawrence",
    Date: "2024-09-12",
    Total: "$1200",
    Status: "Completed",
  },
  {
    id: 13,
    OrderID: "ORDER013",
    Customer: "Scarlett Johansson",
    Date: "2024-09-13",
    Total: "$1300",
    Status: "Completed",
  },
];

function OrdersTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(ORDER_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = ORDER_DATA.filter(
      (order) =>
        order.OrderID.toLowerCase().includes(term) ||
        order.Customer.toLowerCase().includes(term) ||
        order.Status.toLowerCase().includes(term)
    );

    setFilteredOrders(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col w-full sm:flex-row gap-6 sm:gap-0 justify-between sm:items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Orders List</h2>
        <div className="relative">
          <input
            value={searchTerm}
            onChange={handleSearch}
            type="text"
            placeholder="Search orders..."
            className="bg-gray-700 text-gray-100 rounded-lg placeholder-gray-400 pl-10 pr-4 py-2 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50 w-full"
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
                Order ID
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Customer
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Total
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredOrders.map((order) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-gray-700"
              >
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100">
                    {order.OrderID}
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100">
                    {order.Customer}
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100">
                    {order.Total}
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100 relative">
                    {order.Status}
                    <div
                      className={`absolute top-1/2 -right-6 lg:right-0 transform -translate-y-1/2 size-2 rounded-full ${
                        order.Status === "Completed"
                          ? "bg-green-500 "
                          : "bg-yellow-500 animate-ping"
                      } `}
                    ></div>
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100">
                    {order.Date}
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="flex items-center space-x-4">
                    <button className="text-[#6366f1] hover:text-gray-100">
                      <Eye size={16} />
                    </button>
                    <button className="text-[#ec4899] hover:text-gray-100">
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

export default OrdersTable;
