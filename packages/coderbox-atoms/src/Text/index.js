import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { StyledText } from './styles'

class Text extends React.Component {
  static displayName = 'Text'
  static defaultProps = {
    size: 'normal',
    thin: false,
    strong: false,
    padding: '0 0 0 0',
    textAlign: 'left'
  }
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    thin: PropTypes.bool,
    strong: PropTypes.bool,
    textAlign: PropTypes.string,
    padding: PropTypes.string
  }

  render () {
    const { as, children, ...props } = this.props
    const className = cx(`text`, this.props.className)

    return (
      <StyledText {...props} className={className}>{children}</StyledText>
    )
  }
}

export default Text
