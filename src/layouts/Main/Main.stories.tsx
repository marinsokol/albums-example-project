import React, { Fragment } from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { Layout, LayoutProps } from "./index"
import { ListItem } from "../../components/ListItem"

export default {
  title: "Layouts/Main",
  component: Layout,
} as Meta

const Template: Story<LayoutProps> = (args) => <Layout {...args} />

export const Main = Template.bind({})
Main.args = {
  pageTitle: "Album list",
  children: (
    <Fragment>
      <ListItem
        album={{
          id: 4,
          title: "What You See Is What You Get",
          price: "$11.99",
          imageUrl:
            "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/ce/e8/eb/cee8eb1d-5359-033f-a095-85301ab8ef8b/886447949191.jpg/170x170bb.png",
          releaseDate: "2019-11-08T00:00:00-07:00",
          artistId: 4,
          favorite: true,
          artistName: "Gorillaz",
        }}
      />
      <ListItem
        album={{
          id: 4,
          title: "What You See Is What You Get",
          price: "$11.99",
          imageUrl:
            "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/ce/e8/eb/cee8eb1d-5359-033f-a095-85301ab8ef8b/886447949191.jpg/170x170bb.png",
          releaseDate: "2019-11-08T00:00:00-07:00",
          artistId: 4,
          favorite: false,
          artistName: "Gorillaz",
        }}
      />
    </Fragment>
  ),
}
