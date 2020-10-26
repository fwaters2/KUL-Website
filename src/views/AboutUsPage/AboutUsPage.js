import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { Group } from "@material-ui/icons";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/locationPage.js";
import IconHeader from "components/IconHeader/IconHeader";

import Parallax from "components/Parallax/Parallax";
import TeamManagerSection from "./Sections/TeamManagerSection";
import AdminSection from "./Sections/AdminSection";
import VolunteerSection from "./Sections/VolunteersSection";

const useStyles = makeStyles(styles);

export default function AboutUsPage(props) {
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
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/captainsHappy.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <IconHeader icon={Group} title="About Us" />
            <div className={classes.description}>
              <p>
                Our League is made possible by highly paid executives and their
                highly trained employees.... j/k! We exist because we have
                amazing people in our Ultimate community that are always ready
                to step up and help out and give up their valuable free time
                outside of games to work on making each season better than the
                last. KUL is its players!
              </p>
            </div>
            <TeamManagerSection />
            <AdminSection />
            <VolunteerSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
