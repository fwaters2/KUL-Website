import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

// @material-ui/icons
import { Group, DirectionsRun, Favorite } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What is Ultimate Frisbee?</h2>
          <h5 className={classes.description}>
            Ultimate Frisbee is non-contact, co-ed, team sport played with a
            disc. Points are scored by passing the disc to a teammate in the
            opposing end zone while the other team attempts to deflect or
            intercept the disc. It is also completely self-officiated and relies
            on Spirit of the Game to promote fairness and sportsmanship
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Social"
              description="All players sign up individually and are placed on new, balanced teams each season so there is always someone new to meet"
              icon={Group}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Active"
              description="Looking to get in better shape? There is a LOT of running in Ultimate and you will have a lot support from your new teammates!"
              icon={DirectionsRun}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Inclusive"
              description="We are very proud of the diversity of our players from all over the world and their wide range of skill level. We welcome new players as well as seasoned veterans!"
              icon={Favorite}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
