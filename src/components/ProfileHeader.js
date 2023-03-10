import React, { Component } from "react";

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    const { name, username } = this.props;
    return (
      <>
        <h3>
          {name} : (@{username})
        </h3>
      </>
    );
  }
}
