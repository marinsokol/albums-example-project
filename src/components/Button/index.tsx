import React from "react"
import styled from "styled-components"

export type BtnType = "primary" | "secondary"
export interface ButtonProps {
  disabled?: boolean
  type?: BtnType
  label: string
  onClick?: () => void
}

const ButtonEl = styled.button<{ btnType: BtnType }>`
  width: 7.813rem;
  height: 1.563rem;
  border-radius: 3px;
  background-color: ${(props) => props.theme.palette[props.btnType === "secondary" ? "secondary" : "primary"].main};
  color: ${(props) => props.theme.palette[props.btnType === "secondary" ? "secondary" : "primary"].contrastText};
  font-size: 0.625rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  border: none;
  text-transform: ${(props) => (props.btnType === "secondary" ? "none" : "uppercase")};
  text-decoration: ${(props) => (props.btnType === "secondary" ? "underline" : "none")};
  cursor: pointer;
`

export const Button = ({ type, label, onClick }: ButtonProps) => (
  <ButtonEl
    btnType={type || "primary"}
    onClick={() => {
      if (onClick) {
        onClick()
      }
    }}
  >
    {label}
  </ButtonEl>
)
