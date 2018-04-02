import styled from 'styled-components'
import {
  isColor,
  isFluid,
  isOutlined,
  isInverted,
  isDisabled,
  isLoading,
  isSize,
  px
} from '@coderbox/utils'

export const Button = styled.div`
  height: ${p => p.theme.components.button.height};
  padding: ${p => p.theme.components.button.padding};
  border: ${p => p.theme.components.button.border};
  border-color: ${p => p.theme.components.button.borderColor};
  border-radius: ${p => px(p.theme.components.button.borderRadius)};
  color: ${p => p.theme.components.button.color};
  background: ${p => p.theme.components.button.background};
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
    background: ${p => p.theme.components.button.hoverBackground};
  }

  ${isSize}
  ${isFluid}
  ${isColor}
  ${isOutlined}
  ${isInverted}
  ${isLoading}
  ${isDisabled}

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }
  
`
