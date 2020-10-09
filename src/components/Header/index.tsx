import React, { ReactNode } from "react"
import styled from "styled-components"

export interface HeaderProps {
  title: string
  action?: ReactNode
}

const HeaderEl = styled.div`
  width: 100%;
  height: 6.25rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.18);
  background-color: ${(props) => props.theme.palette.common.white};
  display: flex;
  justify-content: center;
  > div {
    max-width: 67.5rem;
    width: calc(100% - 6.5rem);
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 700px) {
    > div {
      flex-direction: column;
      > div {
        width: 100%;
      }
    }
  }
`

const HeaderTitleEl = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.88px;
  color: ${(props) => props.theme.palette.common.blackish};
  @media (max-width: 700px) {
    margin-bottom: 0.725rem;
    text-align: center;
  }
`

export const Header = ({ title, action }: HeaderProps) => (
  <HeaderEl>
    <div>
      <HeaderTitleEl>{title}</HeaderTitleEl>
      <div>{action}</div>
    </div>
  </HeaderEl>
)
