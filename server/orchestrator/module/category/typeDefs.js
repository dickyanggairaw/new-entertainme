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
  input InputSerie {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  extend type Mutation {
    addSerie(serie: InputSerie): TvSerie
    updateSerie(
      id: ID,
      serie:InputSerie
    ): UpdateSerie
    deleteSerie(id: ID!): DeleteSerie
  }
`

module.exports = typeDefs