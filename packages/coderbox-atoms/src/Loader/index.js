import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

class Loader extends React.Component {
  static displayName = 'Loader'
  static defaultProps = {
    size: 'normal'
  }
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    inverted: PropTypes.bool
  }

  render () {
    const className = cx(`loader`, this.props.className)
    const { children, ...props } = this.props
    return (
      <s.Loader {...props} className={className}>
        <s.LoaderContainer {...props} >
          <s.LoaderShadow {...props} />
          <s.LoaderCircle {...props} />
        </s.LoaderContainer>
        {children && <div>{children}</div>}
      </s.Loader>
    )
  }
}

export default Loader
