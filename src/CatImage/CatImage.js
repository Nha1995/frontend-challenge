import React from "react";
import "./CatImage.css";

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
