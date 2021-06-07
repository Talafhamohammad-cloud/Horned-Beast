import React from "react";
import HornedBeasts from "./HornedBeasts";
//import img1 from "../img/p1.jpg";
//import img2 from "../img/p2.jpg";
//import img3 from "../img/p3.jpg";
import imgArr from './data.json';

class Main extends React.Component {
  render() {
    return (
      <main>
        {imgArr.map(element => {
          return (
            <HornedBeasts imgURL={element.image_url} description={element.description} title={element.name} />
          )
        })}
        
      </main>
    );
  }
}

export default Main;