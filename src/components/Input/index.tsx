import React, { ReactNode } from "react"
import styled from "styled-components"

export interface InputProps {
  value: string
  placeholder?: string
  icon?: ReactNode
  onChange: (value: string) => void
  onEnter?: () => void
}

const InputEl = styled.div`
  width: 25.25rem;
  height: 2.5rem;
  position: relative;
  margin: auto;
  padding-right: 1rem;
  input {
    padding-left: 1rem;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    background-color: ${(props) => props.theme.palette.common.white};
    border: none;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.51px;
    color: ${(props) => props.theme.palette.common.black};
  }
  @media (max-width: 700px) {
    max-width: 25.25rem;
    width: 80%;
  }
`

const IconEl = styled.div`
  position: absolute;
  right: 0.75rem;
  top: 0.938rem;
  cursor: pointer;
`

export const Input = ({ value, placeholder, icon, onChange, onEnter }: InputProps) => (
  <InputEl>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={(e) => {
        if (e.key.toLowerCase() === "enter" && onEnter) {
          onEnter()
        }
      }}
    />
    <IconEl
      onClick={() => {
        if (icon && onEnter) {
          onEnter()
        }
      }}
    >
      {icon}
    </IconEl>
  </InputEl>
)
