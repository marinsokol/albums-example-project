import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { ListItem, ListItemProps } from "./index"

export default {
  title: "Components/ListItem",
  component: ListItem,
} as Meta

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />

export const Default = Template.bind({})
Default.args = {
  album: {
    id: 4,
    title: "What You See Is What You Get What You See Is What You Get",
    price: "$11.99",
    imageUrl:
      "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/ce/e8/eb/cee8eb1d-5359-033f-a095-85301ab8ef8b/886447949191.jpg/170x170bb.png",
    releaseDate: "2019-11-08T00:00:00-07:00",
    artistId: 4,
    favorite: false,
    artistName: "Gorillaz",
  },
}

export const Favorite = Template.bind({})
Favorite.args = {
  album: {
    id: 4,
    title: "What You See Is What You Get",
    price: "$11.99",
    imageUrl:
      "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/ce/e8/eb/cee8eb1d-5359-033f-a095-85301ab8ef8b/886447949191.jpg/170x170bb.png",
    releaseDate: "2019-11-08T00:00:00-07:00",
    artistId: 4,
    favorite: true,
    artistName: "Gorillaz",
  },
}
