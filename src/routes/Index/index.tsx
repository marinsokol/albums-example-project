import { observer } from "mobx-react"
import React, { useState } from "react"
import { ListItem } from "../../components/ListItem"
import { Input } from "../../components/Input"
import { Layout } from "../../layouts/Main"
import { useStore } from "../../store/store"
import { ReactComponent as SearchIcon } from "../../components/assets/shape.svg"
import { Loading } from "../../components/Loading"

const IndexPage = () => {
  const [search, setSearch] = useState("")
  const store = useStore()
  const fullAlbums = store.albums.map((album) => ({
    ...album,
    artistName: (store.artists.find((a) => a.id === album.artistId) || { title: "" }).title,
  }))

  return (
    <Layout
      pageTitle="Album list"
      action={
        <Input
          placeholder="Search"
          value={search}
          onChange={(value) => setSearch(value)}
          onEnter={() => store.setQuery(search)}
          icon={<SearchIcon />}
        />
      }
    >
      {store.loadingAlbums ? (
        <Loading />
      ) : (
        fullAlbums.map((f) => (
          <ListItem key={f.id} album={f} onToggleFavorite={() => store.toggleFavorite(f.id, !f.favorite)} />
        ))
      )}
    </Layout>
  )
}

export default observer(IndexPage)
