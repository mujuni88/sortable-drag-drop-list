import * as React from 'react'
import { Avatar } from 'antd'
import { libs, Lib } from 'constants/'
import { isUrl } from 'utils'

interface LibState {
  libs: Lib[]
}

export class LibList extends React.Component<{}, LibState> {
  state = {
    libs: libs
  }

  swap = (oldId, newId) => {
    const oldLib = this.state.libs[oldId]
    const newLib = this.state.libs[newId]

    this.setState(prevState => ({
      libs: prevState.libs.map((lib, id) => {
        if (id === oldId) {
          return newLib
        }

        if (id === newId) {
          return oldLib
        }

        return lib
      })
    }))
  }

  getAvatar = (item: Lib) => {
    return isUrl(item.icon) ? <Avatar src={item.icon} /> : <Avatar>{item.icon}</Avatar>
  }

  onDragStart = (ev) => {
    ev.dataTransfer.dropEffect = 'copy'
    ev.dataTransfer.setData('text/plain', ev.target.dataset.key)
  }

  onDragOver = (ev) => {
    ev.preventDefault()
    ev.dataTransfer.dropEffect = 'move'
  }

  onDrop = (ev) => {
    ev.preventDefault()

    const newId = ev.dataTransfer.getData('text')
    const oldId = this.getId(ev.target)

    this.swap(parseInt(oldId, 10), parseInt(newId, 10))
  }

  getId = (node) => {
    if (node.dataset.key) {
      return node.dataset.key
    }

    return this.getId(node.parentNode)
  }

  getRenderItem = (item: Lib, index: number) => {
    return (
      <div 
        id={`id-${index}`}
        key={index}
        data-key={index}
        className="my-1 p-2 border border-grey-light hover:border-grey"
        draggable={true}
        onDragStart={this.onDragStart}
      >
        <div className="flex items-center">
          {this.getAvatar(item)}
          <div className="flex flex-col ml-2">
            <a className="mb-1" href={item.url}>
              {item.lib}
            </a>
            <span>{item.desc}</span>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
        className="flex flex-col"
      >
        {this.state.libs.map(this.getRenderItem)}
      </div>
    )
  }
}