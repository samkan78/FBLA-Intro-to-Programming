import React from "react";

interface ChameleonDashboard {
  petName: string;
  petType: string;
}

const Dashboard: React.FC<ChameleonDashboard> = ({ petName, petType }) => (
  <div>
    <h2>Chameleon Dashboard</h2>
    <p>Pet Name: {petName}</p>
    <p>Pet Type: {petType}</p>
  </div>
);

export default Dashboard;