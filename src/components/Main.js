import React from "react";
import HornedBeasts from "./HornedBeasts";
import Form from 'react-bootstrap/Form';
//import img1 from "../img/p1.jpg";
//import img2 from "../img/p2.jpg";
//import img3 from "../img/p3.jpg";
//import imgArr from './data.json';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      any: 0,
      hornSnumber: this.props.arr
    }
  }
  filtered = (event) => {
    let newArr = [];
    let hornSnumber = event.target.value;
    if (parseInt(event.target.value) === 0) {
      this.setState({
        hornSnumber: this.props.arr
      })
    }
    else {
      for (let i = 0; i < this.props.arr.length; i++) {
        if (this.props.arr[i].horns === parseInt(hornSnumber)) {
          newArr.push(this.props.arr[i]);
        }
      }
      this.setState({
        hornSnumber: newArr
      })

    }
  }

  render() {
    return (
      <main>
        <Form.Control
          aria-label="select the number of horns"
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
          onChange={this.filtered}
        >
          <option value="0">all-horns</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Control>
        {this.state.hornSnumber.map((element, idx) => {
          return (
            <HornedBeasts key={idx} imgURL={element.image_url} description={element.description} title={element.title} show={this.props.show} />
          )
        })}

      </main>
    );
  }
}

export default Main;
