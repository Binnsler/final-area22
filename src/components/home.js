import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions';

class Home extends Component {

  componentWillMount(){
    this.props.getMembers();
  }

  renderMembers(memberData, i){

    const userLink = `/profile/${memberData.username}`

    return(
      <li key={i} className="col-md-4">
      <Link to={userLink}><img className='image-preview' src={memberData.profilePic}/></Link>
      <h4>{memberData.name}</h4>
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
      );
  }
}

function mapStateToProps(state){
  return {members: state.members.all};
}

export default connect(mapStateToProps, actions)(Home);
