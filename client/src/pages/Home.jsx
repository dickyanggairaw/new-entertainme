import React from 'react'
import { useQuery, gql } from '@apollo/client';
import DataList from '../components/DataList'

const EXCHANGE_RATES = gql`
  query getMovie {
    movies{
      _id
      title
      overview
      poster_path
      popularity
      tags
    },
    tvSeries{
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
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const movies = data.movies
    const tvSeries = data.tvSeries
    return (
        <div className="container">
            <h1>Movies</h1>
            <div className="row">
            {
                movies.map((movie, index) => {
                    return <DataList key={index} data={movie} />
                })
            }
            </div>
            <h1>Tv Series</h1>
            <div className="row">
            {
                tvSeries.map((serie, index) => {
                    return <DataList key={index} data={serie} />
                })
            }
            </div>            
        </div>        
    )
}