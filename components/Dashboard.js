import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

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

  const lineData = [
	{ day: "01", LastWeek: 4.5, ThisWeek: 5 },
	{ day: "02", LastWeek: 5, ThisWeek: 3 },
	{ day: "03", LastWeek: 5, ThisWeek: 2.8 },
	{ day: "04", LastWeek: 3.7, ThisWeek: 3.3 },
	{ day: "05", LastWeek: 4.1, ThisWeek: 1.9 },
	{ day: "06", LastWeek: 2.5, ThisWeek: 2.3 },
	{ day: "07", LastWeek: 5, ThisWeek: 4 },
  ];

  const distributionData = [
	{ name: "Combined", value: 45, color: "#78E04F" },
	{ name: "Extracted", value: 30, color: "#FF6B6B" },
	{ name: "Modified", value: 25, color: "#29CCFF" },
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
		<h2 className="text-3xl font-bold mb-5 text-[#332854]">
		  Project Statistics Dashboard
		</h2>

		{/* Bug-fix PieChart and User Table */}
		<div className="flex justify-between mb-8">
		  {/* Bugfix Pie Chart */}
		  <div>
			<h3 className="font-semibold text-lg mb-3">Root Causes</h3>
			<PieChart width={250} height={250}>
			  <Pie
				data={pieData}
				dataKey="value"
				nameKey="name"
				outerRadius={80}
				label
			  >
				{pieData.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={entry.color} />
				))}
			  </Pie>
			  <Tooltip />
			</PieChart>
		  </div>

		  {/* Top Users Table */}
		  <div>
			<h3 className="font-semibold text-lg mb-3">Top Users</h3>
			<ul>
			  {userData.map((user, index) => {
				const avatarColors = [
				  "bg-[#FF9F43]",
				  "bg-[#29CCFF]",
				  "bg-[#5C5470]",
				  "bg-[#FF6B6B]",
				];
				const initials = user.name
				  .split(" ")
				  .map((n) => n[0])
				  .join(""); // Get initials

				return (
				  <li key={index} className="flex items-center mb-2">
					{/* Avatar */}
					<div
					  className={`w-10 h-10 flex items-center justify-center text-white font-bold rounded-full ${
						avatarColors[index % avatarColors.length]
					  }`}
					>
					  {initials}
					</div>
					{/* User Details */}
					<span className="ml-3 font-medium text-[#332854]">
                      {user.name}
                    </span>{" "}
					- {user.lines}
				  </li>
				);
			  })}
			</ul>
		  </div>
		</div>

		{/* Accepted Lines BarChart */}
		<div className="mb-8">
		  <h3 className="font-semibold text-lg mb-3">Accepted Lines (Weekly)</h3>
		  <BarChart width={500} height={300} data={barData}>
			<XAxis dataKey="day" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="Accepted" fill="#78E04FFF" />
			<Bar dataKey="Not Accepted" fill="#d9434f" />
		  </BarChart>
		</div>

		{/* Stars for Detangling LineChart */}
		<div className="mb-8">
		  <h3 className="font-semibold text-lg mb-3">Average Star Ratings for Detangling</h3>
		  <LineChart width={500} height={300} data={lineData}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="day" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="ThisWeek" stroke="#332854" />
			<Line type="monotone" dataKey="LastWeek" stroke="#C0C7FF" />
		  </LineChart>
		</div>

		{/* Distribution of Commits PieChart */}
		<div className="mb-8">
		  <h3 className="font-semibold text-lg mb-3">Distribution of Modification Types</h3>
		  <PieChart width={300} height={300}>
			<Pie
			  data={distributionData}
			  dataKey="value"
			  nameKey="name"
			  innerRadius={70}
			  outerRadius={100}
			  label
			>
			  {distributionData.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={entry.color} />
			  ))}
			</Pie>
			<Tooltip />
			<Legend />
		  </PieChart>
		</div>

		{/* Footer */}
		<div className="text-right">
		  <button
			className="bg-[#332854] text-white px-4 py-2 rounded-lg hover:bg-[#5A3B96]"
			onClick={() => navigate("welcome")}
		  >
			Back to Welcome Page
		  </button>
		</div>
	  </motion.div>
	</div>
  );
}
