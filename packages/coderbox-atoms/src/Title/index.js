import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { StyledTitle } from './styles'

class Title extends React.Component {
  static displayName = 'Title'
  static defaultProps = {
    as: 'h3',
    size: 'normal',
    thin: false,
    strong: false,
    textAlign: 'left',
    margin: undefined
  }
  static propTypes = {
    as: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    thin: PropTypes.bool,
    strong: PropTypes.bool,
    textAlign: PropTypes.string,
    margin: PropTypes.string
  }
  render () {
    const { as, children, ...props } = this.props
    const className = cx(`title`, this.props.className)
    const Component = StyledTitle.withComponent(as)

    return (
      <Component {...props} className={className}>{children}</Component>
    )
  }
}

export default Title
