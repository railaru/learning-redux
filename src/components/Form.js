import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { createPost } from "./../actions/postActions";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isSending: true });

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  };

  render() {
    return (
      <>
        <h2>Add post</h2>
        <form>
          <div className="form-group" onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              onChange={e => this.setState({ title: e.target.value })}
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              className="form-control"
              id="body"
              rows="3"
              onChange={e => this.setState({ body: e.target.value })}
              value={this.state.body}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  createPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { createPost })(Form);
