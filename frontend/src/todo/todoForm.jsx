import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import Button from '../template/iconButton'
import { changeDescription } from './todoActions'

const TodoForm = props => {

  const keyHandler = event => {
    if( event.key === 'Enter' ) {
      event.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if( event.key === "Escape" ) {
      props.handleClear()
    }
  }

  return (
    <div role="form" className="todoForm">
      <div className="row">
        <Grid cols="12 9 10">
          <input type="text" className="form-control" id="description" placeholder="Adicione uma tarefa" onKeyUp={keyHandler} onChange={ props.changeDescription } value={ props.description } />
        </Grid>

        
        <Grid cols="12 3 2">
          <Button style="primary" icon="plus" onClick={ props.handleAdd }></Button>
          <Button style="info" icon="search" onClick={ props.handleSearch }></Button>
          <Button style="default" icon="close" onClick={ props.handleClear }></Button>
        </Grid>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => 
  bindActionCreators({ changeDescription }, dispatch)

export default connect( mapStateToProps, mapDispatchToProps )(TodoForm)