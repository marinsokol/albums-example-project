import React, { ReactElement, useContext, useEffect } from "react"
import { useLocalStore } from "mobx-react"
import { createStore, TStore } from "./createStore"
import { reaction } from "mobx"

const StoreContext = React.createContext<TStore | null>(null)

export const StoreProvider = ({ children }: { children: ReactElement }) => {
  const store = useLocalStore<TStore>(createStore)

  useEffect(() => {
    store.loadArtists()
    store.loadAlbums()

    reaction(
      () => store.query,
      () => store.loadAlbums()
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.")
  }
  return store
}
