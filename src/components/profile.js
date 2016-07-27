import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Profile extends Component {

  componentWillMount(){
    // Action to get user data from server
    this.props.getProfile(this.props.params.username)
  }

  render(){
    return(
      <div>
        <img className='image-preview' src={this.props.member.profilePic} />
        <h3>{this.props.member.name}</h3>
        <p>{this.props.member.title}</p>
        <p>{this.props.member.email}</p>
        <p>{this.props.member.description}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {member: state.members.memberData}
}

export default connect(mapStateToProps, actions)(Profile);
