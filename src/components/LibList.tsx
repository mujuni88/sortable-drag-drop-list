import * as React from 'react'
import { Avatar } from 'antd'
import { libs, Lib } from 'constants/'
import { isUrl } from 'utils'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

interface LibState {
  libs: Lib[]
}

export class LibList extends React.Component<{}, LibState> {
  state = {
    libs: libs
  }

  getAvatar = (item: Lib) => {
    return isUrl(item.icon) ? <Avatar src={item.icon} /> : <Avatar>{item.icon}</Avatar>
  }

  onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const libs = reorder(
      this.state.libs,
      result.source.index,
      result.destination.index
    )

    this.setState({libs})
  }

  getId = (node) => {
    if (node.dataset.key) {
      return node.dataset.key
    }

    return this.getId(node.parentNode)
  }

  getRenderItem = (item: Lib, index: number) => {
    return (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={`my-1 p-2 border border-grey-light hover:border-grey ${getItemStyle(snapshot.isDragging)}`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
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
        )}
      </Draggable>
    )
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="liblist">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={`flex flex-col ${getListStyle(snapshot.isDraggingOver)}`}
            >
              {this.state.libs.map(this.getRenderItem)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

function getListStyle(isDraggingOver: Boolean) {
 return isDraggingOver ? 'bg-blue-lightest' : ''
}

function getItemStyle(isDragging: Boolean) {
 return isDragging ? 'bg-green-lighter' : ''
}

function reorder(list: any[], srcIdx: number, destIdx: number) {
  const items = Array.from(list)
  const [removed] = items.splice(srcIdx, 1)
  items.splice(destIdx, 0, removed)

  return items
}