import React from 'react'
import Grid from '../template/grid'
import Button from '../template/iconButton'

export default props => {

  const keyHandler = event => {
    if( event.key === 'Enter' ) {
      event.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if( event.key === "Escape" ) {
      props.handleClear()
    }
  }

  return (
    <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <input type="text" className="form-control" id="description" placeholder="Adicione uma tarefa" onKeyUp={keyHandler}onChange={ props.handleChange } value={ props.description } />
    </Grid>

    
    <Grid cols="12 3 2">
      <Button style="primary" icon="plus" onClick={ props.handleAdd }></Button>
      <Button style="info" icon="search" onClick={ props.handleSearch }></Button>
      <Button style="default" icon="close" onClick={ props.handleClear }></Button>
    </Grid>
  </div>
  )
}