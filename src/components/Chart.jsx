import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";

function Chart() {

  const data = [
    { name: "Reports", value: 25 },
    { name: "Score", value: 89 },
    { name: "Files", value: 18 }
  ];

  const colors = ["#1976d2", "#4caf50", "#ff9800"];

  return (
    <div style={{ marginTop: "40px" }}>

      <h2>Accessibility Analytics</h2>

      <BarChart
        width={500}
        height={300}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#1976d2" />
      </BarChart>

      <br /><br />

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
        >
          {
            data.map((entry, index) => (
              <Cell
                key={index}
                fill={colors[index]}
              />
            ))
          }
        </Pie>
        <Tooltip />
      </PieChart>

    </div>
  );
}

export default Chart;