import styled, { keyframes } from 'styled-components'

export const animShow = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`

export const animHide = keyframes`
  from { transform: translateY(0); visibility: visble; }
  to { transform: translateY(-100%); visibility: hidden; }
`

export const Stack = styled.div`
  position: relative;
  overflow: hidden;
`

export const StackItem = styled.div`
  display: 'block';
  height: ${p => p.visible ? 'auto' : 0};
  visibility: ${p => p.visible ? 'visible' : 'hidden'};
  padding: 1px 0;
  animation: ${p => p.animation} 0.35s ease-in-out;
`
