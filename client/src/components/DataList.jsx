import React from "react"
import { useHistory } from "react-router-dom"
import { useMutation, gql } from "@apollo/client"
import { favoriteVars } from "../config/vars"
import { FETCH_MOVIES } from '../query'
import TagList from './TagsList'
import heart from '../assets/heart2.svg'


export default function DataList(props) {
  let history = useHistory()
  const { data, title } = props;

  const DELETE_MOVIE = gql`
  mutation deleteMovie {
    deleteMovie(id:"${data._id}"){
      message
    }
  }`
  const [deleteData] = useMutation(DELETE_MOVIE, {
    refetchQueries: [{
      query: FETCH_MOVIES
    }]
  })
  function editForm() {
    history.push('/editForm/' + data._id)
  }
  function deleteMovie() {
    deleteData()
    history.push('/movies')
  }
  function favoriteMovie (event) {
    event.preventDefault()
    const existingFavorites = favoriteVars()
    let flag = false
    existingFavorites.forEach(favorite => {
      if(favorite.title === data.title){
        flag = true
      }
    })
    if(!flag){
      favoriteVars([data, ...existingFavorites])
    }
  }
  return (
    <>
      <div className="col-3 mb-4">
        <div className="card" >
          <img src={data.poster_path} className="img" alt="" />
          {
              title === 'movie' ? <div>
                <img src={heart} onClick={(event) => favoriteMovie(event)} alt="" className="above-right-icon"/>
              </div> : ''
            } 
        </div>
      </div>
      <div className="col-3">
        <div>
        <h4>{data.title}</h4>
            <p>{data.overview}</p>
            {
              data.tags?.map((tag, index) => {
                return <TagList key={index} tag={tag} ></TagList>
              })
            }
            <br />
            <p>{data.popularity}</p>
            {
              title === 'movie' ? <div>
                <button className="btn btn-edit btn-sm w-20 m-2" onClick={editForm}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm w-20 m-2" onClick={deleteMovie}>
                  DELETE
                </button>
              </div> : ''
            }  
        </div>
      </div>
    </>
  );
}
