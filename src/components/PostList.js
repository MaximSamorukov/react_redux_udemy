import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        Post list
      </div>
    );
  };
}
const mapStateToProps = (state) => ({
  posts: state.posts,
})
export default connect(mapStateToProps, { fetchPosts })(PostList);
