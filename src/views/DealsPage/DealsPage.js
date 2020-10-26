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
} from "@material-ui/icons";

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

const female = () => <Icon icon={genderFemale} />;
const male = () => <Icon icon={genderMale} />;

const useStyles = makeStyles(styles);

export default function DealsPage(props) {
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
            <IconHeader icon={CardMembership} title="KUL Card Deals" />

            <div>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Deals",
                    tabIcon: Money,
                    tabContent: (
                      <Table
                        tableHead={["Business", "Location", "Deal"]}
                        tableData={defaultData}
                      />
                    ),
                  },
                  {
                    tabButton: "Map",
                    tabIcon: LocationOn,
                    tabContent: <Maps />,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
