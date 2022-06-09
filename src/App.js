import Home from "./pages/Home";
import User from "./pages/User";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  // Get Data From Api
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home data={data} />} />
      <Route path="/user/:id" element={<User data={data}/>} />
    </Routes>
  );
}

export default App;
