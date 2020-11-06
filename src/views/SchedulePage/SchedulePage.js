import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { Event, CalendarToday } from "@material-ui/icons";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/locationPage.js";
import IconHeader from "components/IconHeader/IconHeader";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import Parallax from "components/Parallax/Parallax";

const useStyles = makeStyles(styles);

export default function SchedulePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/groupHappy.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <IconHeader icon={Event} title="Schedule" />
            <div className={classes.description}>
              <p>
                All Games take place from about noon until 6pm on Saturdays (or
                Sunday 11/22).
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <div>
                  <Typography variant="h4">Fall 2020 Calendar Dates</Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CalendarToday />
                      </ListItemIcon>
                      <ListItemText
                        primary="Opening Day"
                        secondary="October 31st"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CalendarToday />
                      </ListItemIcon>
                      <ListItemText
                        primary="Round 2"
                        secondary="November 14th"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CalendarToday />
                      </ListItemIcon>
                      <ListItemText
                        primary="Round 3"
                        secondary="November 21st"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CalendarToday />
                      </ListItemIcon>
                      <ListItemText
                        primary="Round 4"
                        secondary="November 22nd"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CalendarToday />
                      </ListItemIcon>
                      <ListItemText
                        primary="Finals"
                        secondary="November 28th"
                      />
                    </ListItem>
                  </List>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
