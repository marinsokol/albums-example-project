import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import Router from "./Router"
import * as serviceWorker from "./serviceWorker"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyle"
import themeJSON from "./theme.json"
import { StoreProvider } from "./store/store"

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider theme={themeJSON}>
        <Fragment>
          <GlobalStyle />
          <Router />
        </Fragment>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
