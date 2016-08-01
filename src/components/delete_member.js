import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions';

class DeleteMember extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }
  }

  componentWillMount(){
    this.props.getMembers();
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onDeleteClick(username){
    this.props.deleteMember(username);
  }

  renderMembers(memberData, i){

    let editLink = `/edit/${memberData.username}`;

    return(
      <li key={i}>
        <h4>{memberData.name}</h4>
        <button className="btn btn-danger" onClick={() => {this.onDeleteClick(memberData.username)}}>Delete Member</button>
        <Link className="btn btn-success" to={editLink}>Edit Profile</Link>
      </li>
    )
  }

  renderMembersList(){

    if(this.props.members){
      return(
        <ul>
          {this.props.members.map(this.renderMembers.bind(this))}
        </ul>
      )
    }
  }


  render(){
    return(
      <div>
        {this.renderMembersList()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {members: state.members.all};
}

export default connect(mapStateToProps, actions)(DeleteMember);
