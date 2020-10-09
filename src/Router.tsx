import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ArtistPage from "./routes/Artist"
import IndexPage from "./routes/Index"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/artist/:artistId">
        <ArtistPage />
      </Route>
      <Route path="/">
        <IndexPage />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router
