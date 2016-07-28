import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions';

class Home extends Component {

  componentWillMount(){
    this.props.getMembers();
  }

  renderMembers(memberData){

    const userLink = `/profile/${memberData.username}`

    return(
      <li key={memberData.username} className="col-1-3 member">
        <Link to={userLink}><img className="member-thumbnail" src={memberData.profilePic}/></Link>
        <h4>{memberData.name}</h4>
        <p className="member-title">{memberData.title}</p>
      </li>
    )
  }

  renderMembersList(){
    if(this.props.members){
      return(
        <ul className="member-list row">
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
      );
  }
}

function mapStateToProps(state){
  return {members: state.members.all};
}

export default connect(mapStateToProps, actions)(Home);
