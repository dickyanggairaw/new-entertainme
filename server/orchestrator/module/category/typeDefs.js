const { gql } = require('apollo-server')

const typeDefs = gql`
  type TvSerie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  type UpdateSerie {
    ok: String
  }
  type DeleteSerie {
    message: String
  }
  extend type Query {
    tvSeries: [TvSerie]
    tvSerie(id: ID!): TvSerie
  }
  extend type Mutation {
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
    ): UpdateSerie
    deleteSerie(id: ID!): DeleteSerie
  }
`

module.exports = typeDefs