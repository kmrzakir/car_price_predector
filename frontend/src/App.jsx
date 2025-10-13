import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
  });

  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("https://fluffy-cod-pjggvj5vwq93rvr9-5000.app.github.dev/home")
      .then((res) => res.json())
      .then((data) =>
        setData({
          name: data.name,
          age: data.age,
          date: data.date,
          programming: data.programming,
        })
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Date: {data.date}</p>
      <p>Programming: {data.programming}</p>
    </div>
  );
}

export default App;
