import "./App.css";
import axios from "axios";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Notes from "./components/Notes";
import Detail from "./components/Detail";

import { Route, Link } from "react-router-dom";
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
          <Link to={`/detail/${note.id}`}>
            <Notes key={index} note={note} />
          </Link>
        ))}
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form data={data} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/detail/:id">
        <Detail data={data} setToggleFetch={setToggleFetch} />
      </Route>
    </>
  );
}

export default App;
