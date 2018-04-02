import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { color, isSize, isInverted, isCircular } from '@coderbox/utils'

const hasShadow = p => {
  if (!p.shadow) return
  return css`
    box-shadow: 0 0 0 0.18em ${rgba(color(p), 0.3)};
    margin: 0.185em;
  `
}

export const Icon = styled.i`
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${p => p.theme.components.icon.width};
  height: ${p => p.theme.components.icon.height};
  line-height: 1.5;
  ${p => p.color && color(p)}

  ${isSize}
  ${isInverted}
  ${isCircular}
  ${hasShadow}
`
