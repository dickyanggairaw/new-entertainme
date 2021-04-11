import React from 'react'
import { useQuery, gql } from '@apollo/client';
import DataList from '../components/DataList'
import { useHistory } from 'react-router-dom'

const EXCHANGE_RATES = gql`
  query getMovie {
    movies{
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export default function Movie () {
    const { loading, error, data } = useQuery(EXCHANGE_RATES)
    const history = useHistory()

    function addMovie (){
        history.push('/form/Movie')
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const movies = data.movies
    return (
        <div className="container">
            <button onClick={addMovie}>Add Movie</button>
            <div className="row">
                {
                    movies.map((movie, index) => {
                        return <DataList key={index} data={movie} />
                    })
                }
            </div>
        </div>        
    )
}