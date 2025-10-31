import React, { useState, useEffect } from "react";
import "./index.css";
import Form from "./components/Form/Form.jsx";
import { getDataOptions } from "./api/api";

function App() {
  const [data_options, setDataOptions] = useState({
    name: [],
    company: [],
    fuel_type: [],
  });

  useEffect(() => {
    async function fetchDataOptions() {
      try {
        const data = await getDataOptions();
        setDataOptions(data);
      } catch (err) {
        console.err("Some error  while fetching options data ", err);
      }
    }
    fetchDataOptions();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to My Website
        </h1>
        <Form data={data_options} />
      </div>
    </div>
  );
}

export default App;
