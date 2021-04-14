import React from "react";
import { useQuery } from "@apollo/client";
import DataList from "../components/DataList";
import { FETCH_ALL } from "../query";

export default function Movie() {
  const { loading, error, data } = useQuery(FETCH_ALL);
  if (loading) return <div className="loader container">Loading</div>;
  if (error) return <p>Error :(</p>;
  const movies = data.movies;
  const tvSeries = data.tvSeries;
  return (
    <div className="container">
      <h2>Movies</h2>
      <div className="row">
        {movies.map((movie, index) => {
          return <DataList key={index} data={movie} />;
        })}
      </div><br/>
      <h2>Tv Series</h2>
      <div className="row">
        {tvSeries.map((serie, index) => {
          return <DataList key={index} data={serie} />;
        })}
      </div>
    </div>
  );
}
