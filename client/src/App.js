import "./App.css";
import axios from "axios";
import Nav from "./components/Nav";
import FilteredResult from "./components/FilteredResult";
import Form from "./components/Form";
import Notes from "./components/Notes";
import Detail from "./components/Detail";

// Projects
import Project from "./components/Project";
import ProjectForm from "./components/ProjectForm";
import ProjectDetail from "./components/ProjectDetail";

import { Route, Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, projectURL, config } from "./services";

function App() {
  const [data, setData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const [toggleFetch, setToggleFetch] = useState(false);
  const [search, setSearch] = useState("");

  // Soring category
  const category = [
    ...new Set(data.map((category) => category.fields.category)),
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get(baseURL, config);
        setData(resp.data.records);
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
      } catch (err) {
        console.error(err);
      }
    };
    getProjectData();
  }, [toggleFetch]);

  const searchResult = [];
  const history = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    data.forEach((note) => {
      if (Object.values(note.fields).includes(search)) {
        searchResult.push(note);
      }
      history.push("/search");
    });
    setSearchData(searchResult);
  };

  return (
    <div className="app">
      <div className="left-nav">
        <Nav data={data} category={category} />
      </div>
      <div className="right">
        <form className="search-form" onSubmit={handleSearch}>
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
        <Route path="/search">
          {searchData.map((note, index) => (
            <Link to={`/detail/${note.id}`}>
              <Notes key={index} note={note} />
            </Link>
          ))}
        </Route>
        <Route path="/:category" exact>
          <FilteredResult category={category} note={data} />
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
        <Route path="/project/:id" exact>
          <ProjectDetail data={projectData} setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/project/:id/edit">
          <ProjectForm data={projectData} setToggleFetch={setToggleFetch} />
        </Route>
      </div>
    </div>
  );
}

export default App;
