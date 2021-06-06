import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imgURL} alt={""} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Footer;
