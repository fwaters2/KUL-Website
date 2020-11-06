import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import andrew from "assets/img/faces/Andrew.jpg";
import hadi from "assets/img/faces/Hadi.jpg";
import teresa from "assets/img/faces/Teresa.jpg";
import william from "assets/img/faces/William.jpg";

import volunteer from "assets/img/faces/Help.jpg";
import ProfileCard from "components/ProfileCard/ProfileCard";

const useStyles = makeStyles(styles);

export default function VolunteerSection() {
  const classes = useStyles();

  const volunteerData = [
    {
      name: "Andrew Gentile",
      photo: andrew,
      subheader: "Community Outreach",
      description:
        "Andrew has been BUSY in his first couple seasons of KUL. He has procured dozens of exclusive deals from supporting local businesses in the area and even organizes meetups! Check out his facebook group (below) for the next one!",
      facebook: "https://www.facebook.com/groups/1520736974722550/",
    },
    {
      name: "Ahmed Hadi",
      photo: hadi,
      subheader: "Member Card Design",
      description:
        "Not only has Hadi helped our pickup scene become a lot more consistent, he is also the designer for our membership cards!",
      facebook: null,
    },
    {
      name: "William Christopher Su",
      photo: william,
      subheader: "Photographer",
      description:
        "While not the only photographer in KUL, her shots now number in the thousands which is especially impressive since she is also playing!",
      facebook: null,
    },
    {
      name: "Teresa Vega",
      photo: teresa,
      subheader: "Photographer",
      description:
        "While not the only photographer in KUL, her KUL pictures now number in the thousands which is especially impressive since she is also playing!",
      facebook: null,
    },
    {
      name: "EVERYONE",
      photo: volunteer,
      subheader: "The small but big stuff",
      description:
        "KUL works because everyone is willing to pitch in and grab some trash that isn't theirs, set up some cones, grab some extra water/ice, or even help put up/take down some tents!",
      facebook: null,
    },
  ];
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Even More Volunteers</h2>
      <div>
        <GridContainer>
          {volunteerData.map((manager) => (
            <GridItem xs={12} sm={6} md={4} key={manager.name}>
              <ProfileCard
                name={manager.name}
                photo={manager.photo}
                subheader={manager.subheader}
                description={manager.description}
                facebook={manager.facebook}
              />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
