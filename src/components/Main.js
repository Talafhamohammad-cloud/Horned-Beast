import React from "react";
import HornedBeasts from "./HornedBeasts";
import img1 from "../img/p1.jpg";
import img2 from "../img/p2.jpg";
import img3 from "../img/p3.jpg";

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeasts
          imgURL={img1}
          title={"bukharan"}
          description={
            "The corkscrew-like horns of the bukharan markhor are coveted by trophy hunters, which is why the species is endangered throughout its range in South and Central Asia. Male bukharan horns can reach 63 inches (1.6 meters) in length, and some cultures believe they have medicinal properties."
          }
        />
        <HornedBeasts
          imgURL={img2}
          title={"sable antelope"}
          description={
            "Both male and female sable antelope posses a pair of ringed horns that arch elegantly toward their backs. Males sport slightly longer horns than females, which can reach 65 inches (1.6 meters) in length. When two of these African mammals go head to head, they drop to their knees and butt horns."
          }
        />
        <HornedBeasts
          imgURL={img3}
          title={"eastern black rhino"}
          description={
            "The eastern black rhino is adorned with an elegant set of hefty horns. Poachers will risk life and limb to get their hands on rhino horn, and as a result, the eastern black rhino is critically endangered. Rhino horn is used in traditional Chinese medicines, but there is no evidence to support the idea that the material has any medicinal value."
          }
        />
      </main>
    );
  }
}

export default Main;
