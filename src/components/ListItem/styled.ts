import styled from "styled-components"
import { Link } from "react-router-dom"

import { ReactComponent as Star } from "../assets/fill-1.svg"

export const ListItemEl = styled.div`
  width: 100%;
  height: 5.625rem;
  box-shadow: 0 1px 3px 0 #e7e7e7;
  background-color: ${(props) => props.theme.palette.common.white};
  display: flex;
  align-items: center;
  margin-bottom: 0.625rem;
  img {
    width: 3.375rem;
    height: 3.375rem;
    object-fit: contain;
    margin: 1.125rem;
  }
  button {
    margin-right: 1.313rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`

export const AlbumInfoEl = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  position: relative;
  > div {
    width: 100%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`

export const AlbumActionsEl = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.51px;
  align-items: center;
  color: ${(props) => props.theme.palette.common.black};
  span {
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.51px;
    color: ${(props) => props.theme.palette.common.warmGreyTwo};
    margin-right: 0.5rem;
  }
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    > button {
      width: 90%;
      margin: 0.725rem 0;
    }
  }
`

export const AlbumTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.66px;
  color: ${(props) => props.theme.palette.common.blackish};
  width: 100%;
`

export const AlbumArtistName = styled(Link)`
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.44px;
  color: ${(props) => props.theme.palette.common.warmGreyTwo};
  margin-top: 0.125rem;
  text-decoration: none;
`

export const StarEl = styled(Star)`
  width: 1rem;
  height: 1rem;
  border: none;
  color: #ffc800;
  position: absolute;
  left: 4.05rem;
  top: 0.688rem;
`
