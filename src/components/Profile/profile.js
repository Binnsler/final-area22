import React, {Component} from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import * as actions from "../../actions";

class Profile extends Component{
  componentWillMount(){
    // Action to get user data from server
    this.props.getProfile( this.props.params.username )
  }

  componentWillUnmount(){
    // Action to clear user data from state
    this.props.clearUserState();
    browserHistory.push( "/" );
  }

  render(){
    return(
      <div>
        <div className="black-break"></div>
        <div className="profile-container">
          <img className="image-preview" src={ this.props.member.profilePic } />
          <h3 className="member-name">{ this.props.member.name }</h3>
          <p>{ this.props.member.title }</p>
          <p>{ this.props.member.email }</p>
          <p>{ this.props.member.description }</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps( state ){
  return { "member": state.members.memberData }
}

export default connect( mapStateToProps, actions )( Profile );
