const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis()

const resolvers = {
  Query: {
    movies: async () => {
      try {
        const redist = await redis.get('movies')
        if(redist) {
          return JSON.parse(redist)
        }else{
          const { data } = await axios.get("http://localhost:4001/movies")
          await redis.set("movies", JSON.stringify(data))
          return data
        }
      } catch (error) {
        throw error
      }
    },
    movie: async (_,args) => {
      try {
        const { id } = args
        const { data } = await axios({
          url: "http://localhost:4001/movies/" + id
        })
        return data
      } catch (error) {
        throw error
      }
    },
  },
  Mutation: {
    addMovie: async (_, args) => {
      try {
        await redis.del("movies")
        const newData = {
          title: args.title,
          overview: args.overview,
          poster_path: args.poster_path,
          popularity: args.popularity,
          tags: args.tags
        }
        const { data } = await axios({
          url: "http://localhost:4001/movies",
          method: 'POST',
          data: newData
        })
        return data[0]
      } catch (error) {
        throw error
      }
    },
    updateMovie: async (_, args) => {
      try {
        await redis.del("movies")
        const newData = {
          title: args.title,
          overview: args.overview,
          poster_path: args.poster_path,
          popularity: args.popularity,
          tags: args.tags
        }
        const { data } = await axios({
          url: "http://localhost:4001/movies/" + args.id,
          method: 'PUT',
          data: newData
        })
        return data
      } catch (error) {
        throw error
      }
    },
    deleteMovie: async (_, args) => {
      await redis.del("movies")
      const { id } = args
      return axios({
        url: "http://localhost:4001/movies/" + id,
        method: "DELETE"
      })
        .then(({ data }) => {
          return data
        })
        .catch(err => {
          throw err
        })
    },
  }
}

module.exports = resolvers