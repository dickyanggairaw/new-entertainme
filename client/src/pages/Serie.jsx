import React from "react";
import { useQuery } from "@apollo/client";
import DataList from "../components/DataList";
import { FETCH_SERIES } from "../query";

export default function Serie() {
  const { loading, error, data } = useQuery(FETCH_SERIES);

  if (loading) return <div className="loader container">Loading</div>;
  if (error) return <p>Error :(</p>;
  const tvSeries = data.tvSeries;
  return (
    <div className="container">
      <h2>TV Serie List</h2>
      <div className="row">
        {tvSeries.map((serie, index) => {
          return <DataList key={index} title={"serie"} data={serie} />;
        })}
      </div>
    </div>
  );
}
