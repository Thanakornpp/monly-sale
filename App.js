import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function App() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [
          300, 450, 500, 700, 900, 1050, 1100, 1300, 1500, 1650, 1700, 1900,
        ],
        backgroundColor: [
          "rgba(248, 117, 170)",
          "rgba(48, 117, 170)",
          "rgba(58, 117, 170)",
          "rgba(78, 117, 170)",
          "rgba(26, 50, 170)",
          "rgba(21, 129, 191)",
          "rgba(253, 235, 158)",
          "rgba(0, 11, 88)",
          "rgba(255, 245, 138)",
          "rgba(255, 187, 225)",
          "rgba(221, 123, 223)",
          "rgba(179, 191, 255)",
        ],
      },
    ],
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Website แสดงกราฟ</h1>
      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 0 10px #ccc",
        }}
      >
        <Bar data={data} />
      </div>
    </div>
  );
}
