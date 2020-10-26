import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/champs/1-Summer16.jpg";
import image2 from "assets/img/champs/2-Fall16.jpg";
import image3 from "assets/img/champs/3-Spring17.png";
import image4 from "assets/img/champs/4-Fall17.jpg";
import image5 from "assets/img/champs/5-Spring18.jpg";
import image6 from "assets/img/champs/6-Fall18.jpg";
import image7 from "assets/img/champs/7-Spring19.jpg";
import image8 from "assets/img/champs/8-Fall19.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const slideInfo = [
    { image: image8, description: "Spirit Animals Fall 2019" },
    { image: image7, description: "Dubble T's Spring 2019" },
    { image: image6, description: "Big Dumps Fall 2018" },
    { image: image5, description: "Flying Monkeys Spring 2018" },
    { image: image4, description: "Typhoon Fall 2017" },
    { image: image3, description: "Typhoon Spring 2017" },
    { image: image2, description: "Barney's Eggplants Fall 2016" },
    { image: image1, description: "Flamingos Summer 2016" },
  ];
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <h2>Previous Champions</h2>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {slideInfo.map((champ) => (
                  <div>
                    <img
                      src={champ.image}
                      alt={champ.description}
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>{champ.description}</h4>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
