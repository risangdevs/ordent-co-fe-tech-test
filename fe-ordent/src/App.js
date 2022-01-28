import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {  CardComponent } from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(`http://localhost:3000/data`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <CardComponent data={data} />
    </div>
  );
}

export default App;
