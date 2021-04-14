import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { FETCH_MOVIES } from "../query";

export default function Form() {
  const history = useHistory();
  const [input, setInput] = useState({
    title: "",
    overview: "",
    poster_path: "",
    tags: "",
    popularity: 0,
  });
  const { slug } = useParams();

  const ADD_DATA = gql`
    mutation Add${slug}($type: Input${slug}) {
        add${slug}(${slug}: $type) {
        _id
        }
    }`;
  const [addData] = useMutation(ADD_DATA, {
    refetchQueries: [
      {
        query: FETCH_MOVIES,
      },
    ],
  });
  function handleChange(e) {
    console.log("bisa");
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    // console.log(input)
  }
  function addForm(e) {
    e.preventDefault();
    addData({
      variables: {
        type: {
          ...input,
          popularity: +input.popularity,
          tags: input.tags.split(" "),
        },
      },
    });
    history.push("/");
  }
  return (
    <div>
      <form className="container" action="" onSubmit={(e) => addForm(e)}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="title"
            id=""
            onChange={(e) => handleChange(e)}
            placeholder="type an title"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="overview"
            id=""
            onChange={(e) => handleChange(e)}
            placeholder="overview"
          />
        </div> 
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="poster_path"
            id=""
            onChange={(e) => handleChange(e)}
            placeholder="poster_path"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="tags"
            id=""
            onChange={(e) => handleChange(e)}
            placeholder="tags"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="popularity"
            id=""
            onChange={(e) => handleChange(e)}
            placeholder="popularity"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
