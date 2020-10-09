import axios, { AxiosResponse } from "axios"

export type Artist = {
  id: number
  title: string
}

export type Album = {
  id: number
  title: string
  price: string
  imageUrl: string
  releaseDate: string
  artistId: number
  favorite: boolean
}

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const limit = urlParams.get("limit")

export const createStore = () => ({
  page: 1,
  limit: limit ? Number(limit) : 10,
  query: "",
  artists: [] as Artist[],
  albums: [] as Album[],
  artistAlbums: [] as Album[],
  setQuery(newQuery: string) {
    this.query = newQuery
  },
  *loadArtists() {
    try {
      const response: AxiosResponse<Artist[]> = yield axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}artists`,
      })
      this.artists = response.data
    } catch (error) {
      console.log("*loadArtists -> error", error)
    }
  },
  *loadAlbums() {
    try {
      const response: AxiosResponse<Album[]> = yield axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}albums?_page=${this.page}&_limit=${this.limit}&q=${this.query}`,
      })
      this.albums = response.data
    } catch (error) {
      console.log("*loadArtists -> error", error)
    }
  },
  *loadArtistAlbums(id: string) {
    try {
      const response: AxiosResponse<Album[]> = yield axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}albums?_artistId=${id}`,
      })
      this.artistAlbums = response.data
    } catch (error) {
      console.log("*loadArtists -> error", error)
    }
  },
  *toggleFavorite(id: number, favorite: boolean) {
    try {
      yield axios({
        method: "PATCH",
        url: `${process.env.REACT_APP_API_URL}albums/${id}`,
        data: { favorite },
      })

      this.albums.forEach((album) => {
        if (album.id === id) {
          album.favorite = favorite
        }
      })
      this.artistAlbums.forEach((album) => {
        if (album.id === id) {
          album.favorite = favorite
        }
      })
    } catch (error) {
      console.log("*toggleFavorite -> error", error)
    }
  },
})

export type TStore = ReturnType<typeof createStore>
