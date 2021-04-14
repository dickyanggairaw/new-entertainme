import React, { useState, useEffect } from "react"
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
  useEffect(()=>{
    if(data){
      setInput({
        title: data.movie.title,
        overview: data.movie.overview,
        poster_path: data.movie.poster_path,
        tags: data.movie.tags.join(' '),
        popularity: data.movie.popularity
      })
    }    
  }, [data])
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
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="title"
          defaultValue={data.movie.title}
          required
        />
        <label>Overview</label>
        <br />
        <input
          className="form-control"
          type="text"
          name="overview"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="overview"
          defaultValue={data.movie.overview}
          required
        />
        <label>Image</label>
        <br />
        <input
          className="form-control"
          type="text"
          name="poster_path"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="poster_path"
          defaultValue={data.movie.poster_path}
          required
        />
        <label>Tags</label><br/>
        <small>Example: input with space</small>
        <br />
        <input
          className="form-control"
          type="text"
          name="tags"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="action drama"
          defaultValue={data.movie.tags.join(" ")}
          required
        />
        <label>Popularity</label>
        <br />
        <input
          className="form-control"
          type="text"
          name="popularity"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="popularity"
          defaultValue={data.movie.popularity}
          required
        />
        <br />
        <button className="btn btn-dark btn-sm" type="submit">Submit</button>
      </form>
    </div>
  );
}
