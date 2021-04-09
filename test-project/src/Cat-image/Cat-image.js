import React from "react";
import "./Cat-image.css";

class Image extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.url} className="img" alt="Cat" />
      </>
    );
  }
}

export default Image;
