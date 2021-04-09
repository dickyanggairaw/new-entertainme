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
  type Update {
    ok: String
  }
  type Delete {
    message: String
  }
  extend type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }
  type InputCreate {
    title: String
    overview: String
    poster_path: String
    tags: [String]
  }
  extend type Mutation {
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
  }
`

module.exports = typeDefs