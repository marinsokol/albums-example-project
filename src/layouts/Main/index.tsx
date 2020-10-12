import React, { ReactNode } from "react"
import styled from "styled-components"

import { Header } from "../../components/Header"

export interface LayoutProps {
  pageTitle: string
  children: ReactNode
  action?: ReactNode
}

const LayoutEl = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.palette.common.mutedWhite};
  min-height: 100vh;
`

const BodyEl = styled.div`
  max-width: 67.5rem;
  width: calc(100% - 6.5rem);
  padding: 3.25rem 0;
  @media (max-width: 700px) {
    width: calc(100% - 1.625rem);
  }
`

export const Layout = ({ pageTitle, children, action }: LayoutProps) => (
  <LayoutEl>
    <Header title={pageTitle} action={action} />
    <BodyEl>{children}</BodyEl>
  </LayoutEl>
)
