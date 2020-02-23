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
      <div>
        <h2>Add post</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={e => this.setState({ title: e.target.value })}
              value={this.state.title}
            ></input>
          </div>
          <div>
            <label>Text body</label>
            <br />
            <textarea
              name="body"
              onChange={e => this.setState({ body: e.target.value })}
              value={this.state.body}
            />
          </div>
          <button type="submit">add</button>
        </form>
      </div>
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
