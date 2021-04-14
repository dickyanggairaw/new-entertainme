import React from "react";
import { useQuery } from "@apollo/client";
import DataList from "../components/DataList";
import { useHistory } from "react-router-dom";
import { FETCH_MOVIES } from "../query";

export default function Movie() {
  const { loading, error, data } = useQuery(FETCH_MOVIES);
  const history = useHistory();

  function addMovie() {
    history.push("/form");
  }

  if (loading) return <div className="loader container">Loading</div>;
  if (error) return <p>Error :(</p>;
  const movies = data.movies;
  return (
    <div className="container">
      <h2>Movie List</h2>
      <button className="btn btn-dark w-10 mb-2 btn-sm" onClick={addMovie}>
        Add Movie
      </button>
      <div className="row">
        {movies.map((movie, index) => {
          return <DataList title={"movie"} key={index} data={movie} />;
        })}
      </div>
    </div>
  );
}
