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
  const [toggleFetch, setToggleFetch] = useState(false);
  const [search, setSearch] = useState("");

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
  }, [toggleFetch]);
  return (
    <>
      <Nav />
      <form id="search-form">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <Route path="/" exact>
        {data.map((note, index) => (
          <Notes key={index} note={note} />
        ))}
      </Route>
      <Form data={data} setToggleFetch={setToggleFetch} />
    </>
  );
}

export default App;
