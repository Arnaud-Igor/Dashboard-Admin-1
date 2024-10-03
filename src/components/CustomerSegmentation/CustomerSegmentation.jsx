import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const customerSegmentationData = [
  { subject: "Price", A: 120, B: 110, fullMark: 150 },
  { subject: "Design", A: 98, B: 130, fullMark: 150 },
  { subject: "Usability", A: 86, B: 130, fullMark: 150 },
  { subject: "Performance", A: 99, B: 100, fullMark: 150 },
  { subject: "Features", A: 85, B: 90, fullMark: 150 },
  { subject: "Support", A: 65, B: 85, fullMark: 150 },
];

function CustomerSegmentation() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">
        Customers Segmentation
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={customerSegmentationData}
          >
            <PolarGrid stroke="#A0AEC0" />
            <PolarAngleAxis dataKey="subject" stroke="#A0AEC0" />
            <PolarRadiusAxis stroke="#A0AEC0" angle={30} domain={[0, 150]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "#4B5563",
              }}
              labelStyle={{ color: "#D1D5DB" }}
              itemStyle={{ color: "#D1D5DB" }}
            />
            <Radar
              name="Segment A"
              dataKey="A"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.6}
            />
            <Radar
              name="Segment B"
              dataKey="B"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default CustomerSegmentation;
