import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class DeleteMember extends Component {
  constructor(props){
    super(props);

    this.state = {
      authenticated: false,
      term: ''
    }
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onAuthenticateSubmit(event){
    event.preventDefault();

    if(this.state.term == 'secretpassword'){
      this.setState({term: '', authenticated: true})
    }
  }

  authenticate(){
    if(!this.state.authenticated){
      return(
        <form onSubmit={this.onAuthenticateSubmit.bind(this)}>
        <fieldset className="form-group">
        <label>Password:</label>
        <input onChange={this.onInputChange.bind(this)} type="password" className="form-control"/>
        </fieldset>
        <button type="submit">Submit</button>
        </form>
      );
    }
  }

  renderMembers(){
    if(this.state.authenticated){
      return(
        <div>

        </div>
      )
    }
  }

  componentWillMount(){
    this.props.getMembers();
  }

  render(){
    return(
      <div>
        {this.authenticate()}
        <ul>
          {this.renderMembers()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {members: state.members.all};
}

export default connect(mapStateToProps, actions)(DeleteMember);
