import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { Header, HeaderProps } from "./index"
import { Input } from "../Input"

export default {
  title: "Components/Header",
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: "Album list",
  action: <Input value="test" onChange={() => {}} />,
}
