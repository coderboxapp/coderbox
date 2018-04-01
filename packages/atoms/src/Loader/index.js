import React from 'react'
import { mapProps } from 'recompose'
import cx from 'classnames'
import * as s from './styles'

const Component = (props) => {
  const className = cx(`loader`, props.className)
  return (
    <s.LoaderContainer {...props}>
      <s.LoaderShadow {...props} />
      <s.Loader {...props} className={className} />
    </s.LoaderContainer>
  )
}

Component.defaultProps = {
  tone: 0
}

Component.displayName = 'Loader'
export default mapProps(props => ({
  ...props,
  isInverted: !props.isInverted
}))(Component)
