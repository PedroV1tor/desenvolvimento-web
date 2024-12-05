import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import "./RelatoriosPage.css";
import { Link } from "react-router-dom"; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>adm</h2>
      <ul>
      <li> <Link to="/admin" className="link">Usuarios</Link> </li>
            <li> <Link to="/produtos" className="link">Produtos</Link> </li>
            <li><Link to="/relatorios" className="link">Relatórios</Link></li>
      </ul>
    </div>
  );
};

const ProductUsageChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Quantidade Utilizada",
        data: data.map((item) => item.quantity),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

const RelatoriosPage = () => {
  const productData = [
    { name: "Queijo", quantity: 120 },
    { name: "Tomate", quantity: 90 },
    { name: "Massa", quantity: 150 },
    { name: "Presunto", quantity: 80 },
    { name: "Calabresa", quantity: 70 },
    { name: "Azeitona", quantity: 60 },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content">
        <h1>Produtos Mais Utilizados</h1>
        <ProductUsageChart data={productData} />
      </div>
    </div>
  );
};

export default RelatoriosPage;
