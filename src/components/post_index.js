import React, {Component} from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

import _ from 'lodash';

class PostIndex extends Component {
componentDidMount() {
  this.props.fetchPosts()  
} 

renderPosts() {
     return _.map(this.props.posts, post => {
         return (
             <li className="list-group-item" key={post.id}>{post.content}</li>
     )
    })
    
}  



render() {
    console.log(this.props.posts)
  return (
      <div>
      <div className="text-xs-right">
      <Link className="btn btn-primary" to="/posts/new">
      Add a post
      </Link>
      </div>  
      <h3>Posts</h3>
      <ul>
      {this.renderPosts()}
      </ul>
      </div>
  )};
}


//function mapDispatchToProps(dispatch){
//    bindActionCreators({fetchPost}, dispatch)
//}

function mapStateToProps(state) {
    return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
