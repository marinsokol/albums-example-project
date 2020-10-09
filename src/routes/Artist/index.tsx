import { observer } from "mobx-react"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ListItem } from "../../components/ListItem"
import { Layout } from "../../layouts/Main"
import { useStore } from "../../store/store"

const ArtistPage = () => {
  const { artistId } = useParams<{ artistId: string }>()
  const store = useStore()
  const artistName = store.artists.find((a) => a.id === Number(artistId))?.title

  useEffect(() => {
    store.loadArtistAlbums(artistId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistId])

  return (
    <Layout pageTitle="Album">
      {store.artistAlbums.map((f) => (
        <ListItem
          key={f.id}
          album={{ ...f, artistName: artistName || "" }}
          onToggleFavorite={() => store.toggleFavorite(f.id, !f.favorite)}
        />
      ))}
    </Layout>
  )
}

export default observer(ArtistPage)
