import * as React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import * as s from './styles'

class Stack extends React.Component {
  state = { index: 0 }

  static displayName = 'Stack'
  static defaultProps = {
    items: () => []
  }

  static propTypes = {
    items: PropTypes.func
  }

  next = () => {
    let index = this.state.index + 1
    let max = this.props.items().length - 1

    if (index > max) index = 0
    this.setState({ index: index })
  }

  prev = () => {
    let index = this.state.index - 1
    this.setState({ index: index < 0 ? 0 : index })
  }

  render () {
    let className = cx('stack', this.props.className)
    let { items, ...props } = this.props
    let { index } = this.state

    items = items(index, this.next, this.prev)
    items = items.map((item, i) => {
      let visible = index === i
      let anim = s.animHide

      if (visible) anim = s.animShow
      return React.cloneElement(item, {key: i, visible: visible, animation: anim})
    })

    return (
      <s.Stack {...props} className={className}>
        {items}
      </s.Stack>
    )
  }
}

Stack.Item = s.StackItem
export default Stack
