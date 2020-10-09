import { createGlobalStyle } from "styled-components"
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

export default GlobalStyle
