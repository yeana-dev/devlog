import "./App.css";
import axios from "axios";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Notes from "./components/Notes";

import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get(baseURL, config);
        console.log(resp.data.records);
        setData(resp.data.records);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);
  return (
    <>
      <Nav />
      <Route path="/" exact></Route>
      {data.map((note, index) => (
        <Notes key={index} note={note} />
      ))}
      <Form />
    </>
  );
}

export default App;
