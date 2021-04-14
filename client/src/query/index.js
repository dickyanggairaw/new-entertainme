import { gql } from '@apollo/client'

export const FETCH_ALL = gql`
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
}`

export const FETCH_SERIES = gql`
query getSeries {
  tvSeries{
    _id
    title
    overview
    poster_path
    popularity
    tags
  }
}`

export const FETCH_MOVIES = gql`
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
`
