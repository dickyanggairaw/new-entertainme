import React, { useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { gql, useMutation, useQuery } from "@apollo/client"
import { FETCH_MOVIES } from '../query'

export default function EditForm() {
  const [input, setInput] = useState({
    title: "",
    overview: "",
    poster_path: "",
    tags: "",
    popularity: 0,
  });
  const { id } = useParams()
  const history = useHistory()

  const FIND_MOVIE = gql`
    query getMovie {
      movie(id: "${id}"){
        _id
        title
        overview
        poster_path
        popularity
        tags
      }
    }`;
  const UPDATE_MOVIE = gql`
    mutation updateMovie($type: InputMovie) {
      updateMovie(id:"${id}", movie: $type) {
        ok
        }
    }`;
  const [updateData] = useMutation(UPDATE_MOVIE, {
    refetchQueries: [{
      query: FETCH_MOVIES
    }]
  })
  const { loading, error, data } = useQuery(FIND_MOVIE);
  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })
    // console.log(input);
  }
  function updateForm(e) {
    e.preventDefault();
    updateData({
      variables: {
        type: {
          ...input,
          popularity: +input.popularity,
          tags: input.tags.split(" "),
        },
      },
    })
    history.push('/')
  }
  if (loading) return <div className="loader container">Loading</div>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <form className="container" action="" onSubmit={(e) => updateForm(e)}>
        <input
          className="form-control"
          type="text"
          name="title"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="title"
          defaultValue={data.movie.title}
        />
        <br />
        <input
          className="form-control"
          type="text"
          name="overview"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="overview"
          defaultValue={data.movie.overview}
        />
        <br />
        <input
          className="form-control"
          type="text"
          name="poster_path"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="poster_path"
          defaultValue={data.movie.poster_path}
        />
        <br />
        <input
          className="form-control"
          type="text"
          name="tags"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="tags"
          defaultValue={data.movie.tags.join(" ")}
        />
        <br />
        <input
          className="form-control"
          type="text"
          name="popularity"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="popularity"
          defaultValue={data.movie.popularity}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
