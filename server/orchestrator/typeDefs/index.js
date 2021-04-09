const { gql } = require('apollo-server')

const typeDefs = gql`
  type Movie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  type TvSerie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  type Update {
    ok: String
  }
  type Delete {
    message: String
  }
  type Query {
    movies: [Movie]
    tvSeries: [TvSerie]
    movie(id: ID!): Movie
    tvSerie(id: ID!): TvSerie
  }
  type InputCreate {
    title: String
    overview: String
    poster_path: String
    tags: [String]
  }
  type Mutation {
    addMovie(
      title: String,
      overview: String,
      poster_path: String,
      popularity: Float,
      tags: [String]
    ): Movie
    updateMovie(
      id: ID,
      title: String,
      overview: String,
      poster_path: String,
      popularity: Float,
      tags: [String]
    ): Update
    deleteMovie(id: ID!): Delete
    addSerie(
      title: String,
      overview: String,
      poster_path: String,
      popularity: Float,
      tags: [String]
    ): TvSerie
    updateSerie(
      id: ID,
      title: String,
      overview: String,
      poster_path: String,
      popularity: Float,
      tags: [String]
    ): Update
    deleteSerie(id: ID!): Delete
  }
`

module.exports = typeDefs