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

  onDeleteClick(username){
    this.props.deleteMember(username);
  }

  renderMembers(memberData, i){
    return(
      <li key={i}>
        <h4>{memberData.name}</h4>
        <button className="btn btn-danger" onClick={() => {this.onDeleteClick(memberData.username)}}>Delete Member</button>
      </li>
    )
  }

  renderMembersList(){
    if(this.state.authenticated){
      return(
        <ul>
          {this.props.members.map(this.renderMembers.bind(this))}
        </ul>
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
        {this.renderMembersList()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {members: state.members.all};
}

export default connect(mapStateToProps, actions)(DeleteMember);
