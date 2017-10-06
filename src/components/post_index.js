import React, {Component} from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'react-redux'
import { fetchPosts } from '../actions';



class PostIndex extends Component {
componentDidMount() {
  this.props.fetchPosts()  
} 
    
render() {
  return (
    <div>Posts Index Test One</div>
  )};
}


//function mapDispatchToProps(dispatch){
//    bindActionCreators({fetchPost}, dispatch)
//}

export default connect(null, { fetchPosts })(PostIndex);
