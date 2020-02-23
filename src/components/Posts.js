import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { fetchPosts } from "./../actions/postActions";

export class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  handlePostDelete = id => {
    console.log("delete id: " + id);
  };

  render() {
    return (
      <>
        <h2>Posts</h2>
        {this.props.posts ? (
          <ul>
            {this.props.posts.map(post => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <button
                  type="button"
                  className="btn btn-danger float-right ml-3"
                  onClick={() => this.handlePostDelete(post.id)}
                >
                  X
                </button>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
