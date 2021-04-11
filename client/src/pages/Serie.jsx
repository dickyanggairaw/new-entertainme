import React from 'react'
import { useQuery, gql } from '@apollo/client'
import DataList from '../components/DataList'
import { useHistory } from 'react-router-dom'

const EXCHANGE_RATES = gql`
  query getSeries {
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

export default function Serie () {
    const history = useHistory()
    const { loading, error, data } = useQuery(EXCHANGE_RATES)

    function addSerie (){
        history.push('/form/Serie')
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const tvSeries = data.tvSeries
    return (
        <div className="container">
            <button onClick={addSerie}>Add Tv Serie</button>
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