import { motion } from "framer-motion"

function StatCard({ name, value, icon:Icon, color }) {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
        whileHover={{ y: -5, boxShadow: "0 20px 15px -12px rgba(0,0,0,0.5)" }}
    >
        <div className="px-4 py-5 sm:px-6">
            <span className="flex items-center text-sm font-medium text-gray-400">
                <Icon className="mr-2" style={{ color }} size={20} />
                {name}
            </span>
            <p className="mt-1 text-xl md:text-3xl font-semibold text-gray-100">{value}</p>
        </div>
    </motion.div>
  )
}

export default StatCard