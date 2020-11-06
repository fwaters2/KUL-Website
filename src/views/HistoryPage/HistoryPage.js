import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import {
  ShowChart,
  CardMembership,
  LocationOn,
  Money,
  LocalLibrary,
} from "@material-ui/icons";
// import MenuBookIcon from "@material-ui/icons/MenuBook";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Table from "components/Table/Table";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/locationPage.js";
import IconHeader from "components/IconHeader/IconHeader";

import { Icon } from "@iconify/react";

import genderMale from "@iconify/icons-mdi/gender-male";
import genderFemale from "@iconify/icons-mdi/gender-female";
import Maps from "components/Maps/Maps";
import ChampCarousel from "./ChampCarousel";
import { intro, paragraphs, conclusion } from "./HistoryTxt.json";

const female = () => <Icon icon={genderFemale} />;
const male = () => <Icon icon={genderMale} />;

const useStyles = makeStyles(styles);

export default function HistoryPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const initialStats = ["Kaohsiung", "10% Off"];
  const players = ["LightHouse", "Brickyard"];
  const defaultData = players.map((player) => [player, ...initialStats]);
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
      <Parallax small filter image={require("assets/img/CardDeals.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <IconHeader icon={LocalLibrary} title="History" />
            <div className={classes.description}>
              <p>{intro}</p>
              {paragraphs.map((x) => (
                <p>{x}</p>
              ))}
              <p>{conclusion}</p>
            </div>
            <div>
              <ChampCarousel />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
