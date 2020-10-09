import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { ReactComponent as SearchIcon } from "../assets/shape.svg"
import { Input, InputProps } from "./index"

export default {
  title: "Components/Input",
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: "Default",
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  placeholder: "WithIcon",
  icon: <SearchIcon />,
}
