import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import suzy from "assets/img/faces/Suzy.jpg";
import brittney from "assets/img/faces/Brittney.jpg";
import jamie from "assets/img/faces/Jamie.jpg";
import jitesh from "assets/img/faces/Jitesh.jpg";
import joann from "assets/img/faces/Joann.jpg";
import dinah from "assets/img/faces/Dinah.jpg";
import forrest from "assets/img/faces/Forrest.jpg";
import ProfileCard from "components/ProfileCard/ProfileCard";

const useStyles = makeStyles(styles);

export default function AdminSection() {
  const classes = useStyles();

  const adminData = [
    {
      name: "Suzy Peng",
      photo: suzy,
      subheader: "League Director",
      description:
        "Respect her authority! Although Suzy is very new to Ultimate and this is her first season as director, she had already proved herself as an invaluable volunteer last season and she looks forward to keeping us all on time and in-line while picking up a few new Ultimate skills herself!",
      facebook: "https://www.facebook.com/suzepeng0128",
    },
    {
      name: "Brittney Morris",
      photo: brittney,
      subheader: "Outgoing Director",
      description:
        "Last season, Brittney was our FIRST EVER director, but it would have been hard to guess from how smoothly she took everything in stride. This season she will be passing on all that knowledge to our current director...",
      facebook: null,
    },
    {
      name: "Joann Hsieh",
      photo: joann,
      subheader: "Jersey Liaison",
      description:
        "Joann has been with the league since the very beginning helping us all look better than we should on the playing field! She was unable to play for the first time last season but is looking forward to getting back out there!",
      facebook: null,
    },

    {
      name: "Jitesh",
      photo: jitesh,
      subheader: "Leadership Development",
      description:
        "Playing Ultimate since the dawn of the millenium and winning both the Team Spirit AND the championship last season, Jitesh is hoping to encourage and teach new leaders in the community as we make new memories during some competitive but spirited games this season!",
      facebook: null,
    },
    {
      name: "Jamie Lewis",
      photo: jamie,
      subheader: "Media Director",
      description:
        "Jamie has been playing with KUL since season 1 and has has captained two teams to the championship. Now he has dedicated himself to promoting the Kaohsiung community and bringing people closer through social sporting events such as KUL and bowling",
      facebook: "https://www.facebook.com/groups/2907721949325759/?ref=share",
    },
    {
      name: "Dinah Su",
      photo: dinah,
      subheader: "League Treasurer",
      description:
        "Dinah has been playing Ultimate for about 4 years now and has been keeping our books in order for even longer! She's looking forward to winning some games and the day when all the player fees are finally in!",
      facebook: "https://www.facebook.com/profile.php?id=100002124270245",
    },
    {
      name: "Forrest Waters",
      photo: forrest,
      subheader: "General Manager",
      description:
        "Forrest has been playing Ultimate for about 8 years after getting his start in a Korean Expat league. He is now completely addicted and looking forward to a season of new friends and old!",
      facebook: "https://www.facebook.com/gringo17",
    },
  ];
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Fall 2020 Admin Team</h2>
      <div>
        <GridContainer>
          {adminData.map((manager) => (
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
