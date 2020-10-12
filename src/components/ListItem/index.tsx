import React from "react"
import moment from "moment"

import { Button } from "../Button"
import { ListItemEl, AlbumActionsEl, AlbumArtistName, AlbumTitle, AlbumInfoEl, StarEl } from "./styled"

export interface ListItemProps {
  album: {
    id: number
    title: string
    imageUrl: string
    releaseDate: string
    artistId: number
    price: string
    favorite: boolean
    artistName: string
  }
  onToggleFavorite?: () => void
}

export const ListItem = ({ album, onToggleFavorite }: ListItemProps) => (
  <ListItemEl data-name="list-item">
    <AlbumInfoEl>
      {album.favorite && <StarEl />}
      <img src={album.imageUrl} alt={album.title} />
      <div>
        <AlbumTitle>{album.title}</AlbumTitle>
        <AlbumArtistName to={`/artist/${album.artistId}`}>{album.artistName}</AlbumArtistName>
      </div>
    </AlbumInfoEl>
    <AlbumActionsEl>
      <div>
        <span>Released:</span>
        {moment(album.releaseDate).get("year")}
      </div>
      <div>{album.price}</div>
      <Button
        label={album.favorite ? "Remove favorite" : "Mark as favorite"}
        type={album.favorite ? "secondary" : "primary"}
        onClick={onToggleFavorite}
      />
    </AlbumActionsEl>
  </ListItemEl>
)
