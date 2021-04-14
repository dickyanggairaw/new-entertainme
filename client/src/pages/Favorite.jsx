import React from 'react'
import { useReactiveVar } from '@apollo/client'
import { favoriteVars } from '../config/vars'
import DataList from '../components/DataList'

export default function Favorite () {
  const favorites = useReactiveVar(favoriteVars)
  return (
    <div className="container">
      <div className="row">
        {
          favorites.length === 0 ? <div className="loader container">dont have favorite</div> :
          favorites.map(favorite => {
            return <DataList keu={favorite._id} data={favorite}></DataList>
          })
        }
      </div>
    </div>
  )
}