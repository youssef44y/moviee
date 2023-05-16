import { useState } from "react";
import "./App.css";
import data from "./components/Data";
import MovieList from "./components/MovieList";
import Add from "./components/Add";
import React, { useRef } from "react";
import Filters from "./components/Filters";

function App() {
  const [movies, setMovies] = useState(data);
  const [newMovie, setNewMovie] = useState([]);
  const [search,setSearch] = useState(" ")
  const [rating,setrating] = useState(1)
  const myTitle = useRef();
  const myImg = useRef();
  const myRate = useRef();
  const myDescription = useRef();
  const toSearch=useRef()


  const handleAdd = () => {
    setNewMovie([
      {
        title: myTitle.current.value,
        img: myImg.current.value,
        rate: myRate.current.value,
        description: myDescription.current.value,
      },
    ]);
    setMovies([...movies, ...newMovie]);
  };
const handelSearch = () => {
  setSearch(toSearch.current.value)
}
const handelRate = (rating) => {
setrating(rating)
}

  return (
    <div className="app">
      <header >
        <Filters handelSearch={handelSearch} toSearch={toSearch} handelRate={handelRate}/>
      <Add
        myTitle={myTitle}
        myImg={myImg}
        myRate={myRate}
        myDescription={myDescription}
        handleAdd={handleAdd}
      />
      </header>
      
      <MovieList movies={[...movies, ...newMovie].filter(movie=>movie.title.toLowerCase().trim().includes(search.toLowerCase().trim())
        && movie.rate >= rating)} />
      
       
    
    </div>
  );
}

export default App;
