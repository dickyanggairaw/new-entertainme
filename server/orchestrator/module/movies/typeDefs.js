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
  input InputMovie {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  extend type Mutation {
    addMovie(Movie: InputMovie): Movie
    updateMovie(
      id: ID,
      movie: InputMovie
    ): Update
    deleteMovie(id: ID!): Delete
  }
`

module.exports = typeDefs