import { motion } from "framer-motion";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function Dashboard({ navigate }) {
  // Static Data for Graphs
  const pieData = [
	{ name: "Bug-fix", value: 75, color: "#FF9F43" },
	{ name: "Feature", value: 65, color: "#29CCFF" },
	{ name: "Refactor", value: 15, color: "#5C5470" },
  ];

  const barData = [
	{ day: "Mon", Accepted: 40, "Not Accepted": 20 },
	{ day: "Tue", Accepted: 35, "Not Accepted": 15 },
	{ day: "Wed", Accepted: 50, "Not Accepted": 25 },
	{ day: "Thu", Accepted: 45, "Not Accepted": 18 },
	{ day: "Fri", Accepted: 55, "Not Accepted": 22 },
  ];

  const userData = [
	{ name: "Sertaç Derya", lines: "45.000 lines" },
	{ name: "Berkay Gündüz", lines: "35.000 lines" },
	{ name: "Işıl Özgü", lines: "25.000 lines" },
	{ name: "Burhan Tabak", lines: "15.000 lines" },
  ];

  return (
	<div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
	  <motion.div
		initial={{ y: -50, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		transition={{ duration: 0.5 }}
		className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full"
	  >
		{/* Header */}
		<h2 className="text-3xl font-bold mb-5 text-[#332854]">Login Dashboard</h2>

		{/* Bar Chart */}
		<div className="mb-8">
		  <h3 className="font-semibold text-lg mb-3">Accepted Lines (Weekly)</h3>
		  <BarChart width={500} height={300} data={barData}>
			<XAxis dataKey="day" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="Accepted" fill="#332854" />
			<Bar dataKey="Not Accepted" fill="#D9D9D9" />
		  </BarChart>
		</div>

		{/* Pie Chart */}
		<div className="flex justify-between mb-8">
		  <div>
			<h3 className="font-semibold text-lg mb-3">Root Causes</h3>
			<PieChart width={250} height={250}>
			  <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
				{pieData.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={entry.color} />
				))}
			  </Pie>
			</PieChart>
		  </div>

		  {/* User Table */}
		  <div>
			<h3 className="font-semibold text-lg mb-3">Top Users</h3>
			<ul>
			  {userData.map((user, index) => (
				<li key={index} className="mb-2">
				  <span className="font-medium">{user.name}</span> - {user.lines}
				</li>
			  ))}
			</ul>
		  </div>
		</div>

		{/* Footer */}
		<div className="text-right">
		  <button className="bg-[#332854] text-white px-4 py-2 rounded-lg hover:bg-[#5A3B96]"
				  onClick={() => navigate("welcome")}>
			Go to Welcome Page
		  </button>
		</div>
	  </motion.div>
	</div>
  );
}
