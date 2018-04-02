import styled from 'styled-components'
import {
  isColor,
  isHover,
  isFluid,
  isOutlined,
  isInverted,
  isDisabled,
  isLoading,
  isSize,
  px
} from '@coderbox/utils'

export const Button = styled.div.attrs({
  button: p => ({...p.theme.components.button})
})`
  height: ${p => p.button.height};
  padding: ${p => p.button.padding};
  border: ${p => p.button.border};
  border-radius: ${p => px(p.button.borderRadius)};
  color: ${p => p.button.color};
  background: ${p => p.button.background};
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;

  &:hover {
    background: ${p => p.button.hoverBackground};
  }

  ${isSize}
  ${isFluid}
  ${isColor}
  ${isHover}
  ${isOutlined}
  ${isInverted}
  ${isLoading}
  ${isDisabled}

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }
  
`
