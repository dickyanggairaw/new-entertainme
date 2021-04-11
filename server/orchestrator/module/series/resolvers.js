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
      try {
        await redis.del("tvSeries")
        const newData = {
          title: args.Serie.title,
          overview: args.Serie.overview,
          poster_path: args.Serie.poster_path,
          popularity: args.Serie.popularity,
          tags: args.Serie.tags
        }
        const { data } = await axios({
          url: "http://localhost:4002/tvseries",
          method: 'POST',
          data: newData
        })
        return data[0]
      } catch (error) {
        throw error
      }
    },
    updateSerie: async (_, args) => {
      try {
        await redis.del("tvSeries")
        const newData = {
          title: args.serie.title,
          overview: args.serie.overview,
          poster_path: args.serie.poster_path,
          popularity: args.serie.popularity,
          tags: args.serie.tags
        }
        const { data } = await axios({
          url: "http://localhost:4002/tvseries/" + args.id,
          method: 'PUT',
          data: newData
        })
        return data
      } catch (error) {
        throw error
      }
    },
    deleteSerie: async (_, args) => {
      try {
        await redis.del("tvSeries")
        const { id } = args
        const { data } = await axios({
          url: "http://localhost:4002/tvseries/" + id,
          method: "DELETE"
        })
        return data
      } catch (error) {
        throw error
      }
    },
  }
}

module.exports = resolvers