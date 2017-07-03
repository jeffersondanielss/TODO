import React from 'react'
import { connect } from 'react-redux'
import Button from '../template/iconButton'

const TodoList = props => {
  const renderRows = () => {

    const list = props.list || []
    
    return list.map(todo => (
      <tr key={ todo._id }>
        <td className={ todo.done ? 'markedAsDone' : '' }>{ todo.description }</td>
        <td>
          <Button style="success" icon="check" hide={todo.done} onClick={ () => props.handleMarkAsDone(todo) }></Button>
          <Button style="warning" icon="undo" hide={!todo.done} onClick={ () => props.handleMarkAsPendding(todo) }></Button>
          <Button style="danger" icon="trash-o" hide={!todo.done} onClick={ () => props.handleRemove(todo) }></Button>
        </td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>

      <tbody>
        { renderRows() }
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({ list: state.todo.list })

export default connect(mapStateToProps)(TodoList)