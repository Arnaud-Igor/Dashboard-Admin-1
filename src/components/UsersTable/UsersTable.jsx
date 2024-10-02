import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const USER_DATA = [
  {
    id: 1,
    name: "John Doe",
    email: "jonhdoe@gmail.com",
    role: "Admin",
    status: "Active",
    imageUrl:
      "https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1727874867~exp=1727878467~hmac=83bf27e2a8c388712440faa024cdc258a432da62b103487e451998201a4f58b6&w=1060",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    role: "Customer",
    status: "Active",
    imageUrl:
      "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg?t=st=1727875590~exp=1727879190~hmac=dee5ad5a11dddcc32c9db9a9e2314c3a21efacd85f5df94daf41a93e885684cf&w=1060",
  },
  {
    id: 3,
    name: "Alice Eve",
    email: "aliceeve@gmail.com",
    role: "Customer",
    status: "Active",
    imageUrl:
      "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100278.jpg?t=st=1727875627~exp=1727879227~hmac=f51407583391ef4c8e9206352f4754b1e0ac6c79ced41a7c003f3b0729956af1&w=1060",
  },
  {
    id: 4,
    name: "Bob Smith",
    email: "bobsmith@gmail.com",
    role: "Moderator",
    status: "Inactive",
    imageUrl:
      "https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151133887.jpg?t=st=1727875438~exp=1727879038~hmac=59032f97518fb1d90efc61174608d274dceb37139756d8815a56b47de4b4322f&w=1800",
  },
  {
    id: 5,
    name: "Jerry King",
    email: "jerryking@gmail.com",
    role: "Customer",
    status: "Active",
    imageUrl:
      "https://img.freepik.com/free-photo/3d-illustration-business-man-with-glasses-grey-background-clipping-path_1142-58140.jpg?t=st=1727875548~exp=1727879148~hmac=ed0f1c753fab6f2278d32730a6ab28f0056ee6e37ff1139d365d21bd37d8b064&w=1060",
  },
  {
    id: 6,
    name: "Chris Brown",
    email: "chrisbrown@gmail.com",
    role: "Moderator",
    status: "Inactive",
    imageUrl:
      "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1727875676~exp=1727879276~hmac=8ba04c74e87f24c39d4f8b3d266233fb633ac118fceb4c20af8cc79700d48f64&w=1060",
  },
  {
    id: 7,
    name: "Anna Green",
    email: "annagreen@gmail.com",
    role: "Customer",
    status: "Active",
    imageUrl:
      "https://img.freepik.com/free-photo/young-business-woman-with-glasses-white-towel-her-head-3d-rendering_1142-51503.jpg?t=st=1727875740~exp=1727879340~hmac=3e83a77c4e2682a5af4da42bb4bfb7cdf85769d2fa931826f8279c749c5838c2&w=1060",
  },
];

function UsersTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(USER_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = USER_DATA.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );

    setFilteredUsers(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col w-full sm:flex-row gap-6 sm:gap-0 justify-between sm:items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Users List</h2>
        <div className="relative">
          <input
            value={searchTerm}
            onChange={handleSearch}
            type="text"
            placeholder="Search users..."
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
                Name
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-gray-700"
              >
                <td className="py-4 px-6 flex gap-2 items-center whitespace-nowrap text-sm font-medium text-gray-100">
                  <img
                    src={user.imageUrl}
                    alt={user.name}
                    className="size-10 rounded-full object-cover"
                  />
                  {user.name}
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100">
                    {user.email}
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100">
                    {user.role}
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-100 relative">
                    {user.status}
                    <div
                      className={`absolute top-1/2 -right-6 lg:right-0 transform -translate-y-1/2 size-2 rounded-full ${
                        user.status === "Active" ? "bg-green-500 animate-ping" : "bg-red-500"
                      } `}
                    ></div>
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="flex items-center space-x-4">
                    <button className="text-[#6366f1] hover:text-gray-100">
                      <Edit size={16} />
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

export default UsersTable;
