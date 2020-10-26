import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { ShowChart } from "@material-ui/icons";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Table from "components/Table/Table";
import HeaderLinks from "components/Header/HeaderLinks.js";
import TableNavPills from "components/TableNavPills/TableNavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/locationPage.js";
import IconHeader from "components/IconHeader/IconHeader";

import { Icon } from "@iconify/react";

import genderMale from "@iconify/icons-mdi/gender-male";
import genderFemale from "@iconify/icons-mdi/gender-female";
import useSeasonStatGetter from "./useSeasonStatGetter";
import useRookieStatGetter from "./useRookieStatGetter";

const female = () => <Icon icon={genderFemale} />;
const male = () => <Icon icon={genderMale} />;

const useStyles = makeStyles(styles);

export default function SeasonStatsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const initialStats = ["Undrafted", 0, 0, 0, 0];
  const players = ["Forrest", "Dinah"];
  const defaultData = players.map((player) => [player, ...initialStats]);
  const femaleSeasonStats = useSeasonStatGetter("Female");
  const maleSeasonStats = useSeasonStatGetter("Male");

  const femaleRookieStats = useRookieStatGetter("Female");
  const maleRookieStats = useRookieStatGetter("Male");
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
      <Parallax small filter image={require("assets/img/Statkeeping.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <IconHeader icon={ShowChart} title="Season Stats" />

            <div>
              <TableNavPills
                TableTitle="RookieWatch"
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Female",
                    tabIcon: female,
                    tabContent: (
                      <Table
                        tableHead={["Name", "Team", "A", "G", "Ds", "Total"]}
                        tableData={femaleRookieStats}
                      />
                    ),
                  },
                  {
                    tabButton: "Male",
                    tabIcon: male,
                    tabContent: (
                      <Table
                        tableHead={["Name", "Team", "A", "G", "Ds", "Total"]}
                        tableData={maleRookieStats}
                      />
                    ),
                  },
                ]}
              />
            </div>
            <div>
              <TableNavPills
                TableTitle="All Players"
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Female",
                    tabIcon: female,
                    tabContent: (
                      <Table
                        tableHead={["Name", "Team", "A", "G", "Ds", "Total"]}
                        tableData={femaleSeasonStats}
                      />
                    ),
                  },
                  {
                    tabButton: "Male",
                    tabIcon: male,
                    tabContent: (
                      <Table
                        tableHead={["Name", "Team", "A", "G", "Ds", "Total"]}
                        tableData={maleSeasonStats}
                      />
                    ),
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
