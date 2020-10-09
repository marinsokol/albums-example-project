// .storybook/preview.js
import React from "react"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"
import themeJson from "../src/theme.json"
import WebFont from "webfontloader"

WebFont.load({
  google: {
    families: ["Work+Sans&display=swap"],
  },
})

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans';
  }
`

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={themeJson}>
      <div style={{ minHeight: 350, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <GlobalStyle />
        <Story {...context} />
      </div>
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
