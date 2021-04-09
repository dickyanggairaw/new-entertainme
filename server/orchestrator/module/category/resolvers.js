const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis()

const resolvers = {
  Query: {
    tvSeries: async () => {
      try {
        const redist = await redis.get('tvSeries')
        if(redist) {
          return JSON.parse(redist)
        }else{
          const { data } = await axios.get("http://localhost:4002/tvseries")
          await redis.set("tvSeries", JSON.stringify(data))
          return data
        }
      } catch (error) {
        throw error
      }
    },
    tvSerie: async (_, args) => {
      try {
        const { id } = args
        const { data } = await axios({
          url: "http://localhost:4002/tvseries/" + id
        })
        return data
      } catch (error) {
        throw error
      }
    }
  },
  Mutation: {
    addSerie: async (_, args) => {
      await redis.del("tvSeries")
      const newData = {
        title: args.title,
        overview: args.overview,
        poster_path: args.poster_path,
        popularity: args.popularity,
        tags: args.tags
      }
      return axios({
        url: "http://localhost:4002/tvseries",
        method: 'POST',
        data: newData
      })
        .then(({ data }) => {
          return data[0]
        })
        .catch(err => {
          throw err
        })
    },
    updateSerie: async (_, args) => {
      await redis.del("tvSeries")
      const newData = {
        title: args.title,
        overview: args.overview,
        poster_path: args.poster_path,
        popularity: args.popularity,
        tags: args.tags
      }
      return axios({
        url: "http://localhost:4002/tvseries/" + args.id,
        method: 'PUT',
        data: newData
      })
        .then(({ data }) => {
          console.log(data)
          return data
        })
        .catch(err => {
          throw err
        })
    },
    deleteSerie: async (_, args) => {
      await redis.del("tvSeries")
      const { id } = args
      return axios({
        url: "http://localhost:4002/tvseries/" + id,
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