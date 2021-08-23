import "./App.css";
import axios from "axios";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Notes from "./components/Notes";
import Detail from "./components/Detail";

// Projects
import Project from "./components/Project";
import ProjectForm from "./components/ProjectForm";
import ProjectDetail from "./components/ProjectDetail";

import { Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, projectURL, config } from "./services";

function App() {
  const [data, setData] = useState([]);
  const [projectData, setProjectData] = useState([]);

  const [toggleFetch, setToggleFetch] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get(baseURL, config);
        setData(resp.data.records);
        console.log("These are note data");
        console.log(resp.data.records);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [toggleFetch]);

  useEffect(() => {
    const getProjectData = async () => {
      try {
        const resp = await axios.get(projectURL, config);
        setProjectData(resp.data.records);
        console.log("These are projects data");
        console.log(resp.data.records);
      } catch (err) {
        console.error(err);
      }
    };
    getProjectData();
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
      <Route path="/project" exact>
        <Project data={projectData} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/new-project">
        <ProjectForm setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/project/:id">
        <ProjectDetail data={projectData} />
      </Route>
    </>
  );
}

export default App;
