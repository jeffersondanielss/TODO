import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import Button from '../template/iconButton'
import { clear, add, changeDescription, search } from './todoActions'


class TodoForm extends Component {

  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  keyHandler(event) {
    const { clear, add, search, description } = this.props

    if( event.key === 'Enter' ) {
      event.shiftKey ? search(description) :  add(description)
    } else if( event.key === "Escape" ) {
      clear()
    }
  }

  componentWillMount() {
    this.props.search();
  }

  render() {
    const { add, search, description } = this.props

    return (
      <div role="form" className="todoForm">
        <div className="row">
          <Grid cols="12 9 10">
            <input type="text" className="form-control" id="description" placeholder="Adicione uma tarefa" onKeyUp={this.keyHandler} onChange={ this.props.changeDescription } value={ this.props.description } />
          </Grid>

          
          <Grid cols="12 3 2">
            <Button style="primary" icon="plus" onClick={ () => add( description ) }></Button>
            <Button style="info" icon="search" onClick={ search }></Button>
            <Button style="default" icon="close" onClick={ this.props.clear }></Button>
          </Grid>
        </div>
      </div>
    )
  }
  
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ clear,add, changeDescription, search }, dispatch)

export default connect( mapStateToProps, mapDispatchToProps )(TodoForm)