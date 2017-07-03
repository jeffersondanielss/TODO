import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import Button from '../template/iconButton'
import { changeDescription, search } from './todoActions'


class TodoForm extends Component {

  constructor(props) {
    super(props)

    this.keyHandler = this.keyHandler.bind(this)

  }

  keyHandler(event) {
    if( event.key === 'Enter' ) {
      event.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if( event.key === "Escape" ) {
      this.props.handleClear()
    }
  }

  componentWillMount() {
    this.props.search();
  }

  render() {
    return (
      <div role="form" className="todoForm">
        <div className="row">
          <Grid cols="12 9 10">
            <input type="text" className="form-control" id="description" placeholder="Adicione uma tarefa" onKeyUp={this.keyHandler} onChange={ this.props.changeDescription } value={ this.props.description } />
          </Grid>

          
          <Grid cols="12 3 2">
            <Button style="primary" icon="plus" onClick={ this.props.handleAdd }></Button>
            <Button style="info" icon="search" onClick={ this.props.handleSearch }></Button>
            <Button style="default" icon="close" onClick={ this.props.handleClear }></Button>
          </Grid>
        </div>
      </div>
    )
  }
  
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)

export default connect( mapStateToProps, mapDispatchToProps )(TodoForm)