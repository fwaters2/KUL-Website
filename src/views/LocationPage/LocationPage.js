import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import {
  LocationOn,
  DirectionsWalk,
  Map
  //DirectionsCar,
} from "@material-ui/icons";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Maps from "components/Maps/Maps";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/locationPage.js";
import IconHeader from "components/IconHeader/IconHeader";

const useStyles = makeStyles(styles);

export default function LocationPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/mapwithmarkers.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <IconHeader icon={LocationOn} title="Location" />
            <div className={classes.description}>
              <p>
                Spring 2020 season will be held at the fields near the Oil
                Refinery MRT stop in Nanzi. Check the maps below for more
                information!
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Map",
                      tabIcon: Map,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12}>
                            <Maps />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Directions",
                      tabIcon: DirectionsWalk,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12}>
                            <img
                              alt="..."
                              src={require("assets/img/mapwithmarkers.jpg")}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                    // {
                    //   tabButton: "Directions",
                    //   tabIcon: DirectionsCar,
                    //   tabContent: (
                    //     <GridContainer justify="center">
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={require("assets/img/mapwithmarkers.jpg")}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //     </GridContainer>
                    //   )
                    // }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
