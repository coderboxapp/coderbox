import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Icon } from '../index'
import * as s from './styles'

class Tag extends React.Component {
  static displayName = 'Tag'
  static defaultProps = {
    color: null,
    icon: null,
    size: 'normal',
    delete: false
  }

  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    delete: PropTypes.bool
  }

  render () {
    const className = cx(`tag`, this.props.className)
    const {icon, isDelete, children, ...props} = this.props

    return (
      <s.Tag {...props} icon={icon} isDelete={isDelete} className={className}>
        {icon && <Icon key={0} name={icon} />}
        {children}
      </s.Tag>
    )
  }
}

export default Tag
