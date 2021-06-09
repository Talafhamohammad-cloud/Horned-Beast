import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import imgArr from './components/data.json';
import ChosenPic from './components/ChosenPic'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: imgArr,
      elementFound: {
      },
      showBeast: false,
    }
  }
  
  liftStateUp = (Main) => {
    this.setState({ activeNode: Main })
  }

  showModal = (param) => {
    let result = imgArr.find(element => {
      if (element.title === param) {
        return element;
      }
      else {
        return "";
      }
    });
    this.setState({
      elementFound: result,
      showBeast: true,
    });
  }



  hideModal = () => {
    this.setState({
      showBeast: false
    })
  }
  render() {
    return (
      <div>
        <h1>{this.props.imgURL}</h1>
        <Header />
        <Main arr={this.state.arr} show={this.showModal} />
        <ChosenPic info={this.state.arr}
          showBeast={this.state.showBeast}
          hideModal={this.hideModal}
          showChosenPic={this.state.showBeast}
          modalElement={this.state.elementFound} />
        <Footer />
      </div>
    );
  }
}
export default App;
