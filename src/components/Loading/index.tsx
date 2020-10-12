import React from "react"
import styled from "styled-components"

const LoadingEl = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.66px;
  color: ${(props) => props.theme.palette.common.blackish};
`

export const Loading = () => <LoadingEl>Loading...</LoadingEl>
