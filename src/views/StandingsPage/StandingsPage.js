import React from "react";
import classNames from "classnames";
import Table from "components/Table/Table.js";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/locationPage.js";
import { makeStyles } from "@material-ui/core";
import Parallax from "components/Parallax/Parallax";
import IconHeader from "components/IconHeader/IconHeader";
import { FormatListNumbered } from "@material-ui/icons";
import useStandingsGetter from "./useStandingsGetter";
import WeeklyResults from "./WeeklyResults";
import Firebase from "utils/Firebase";
import moment from "moment";
import useFirebaseGetToArray from "utils/useFirebaseGetToArray";

const useStyles = makeStyles(styles);

export default function StandingsPage(props) {
  const [uniqueDates, setUniqueDates] = React.useState([]);
  const { ...rest } = props;
  const classes = useStyles();

  const standingsData = useStandingsGetter().map((x, index) => [
    index + 1,
    ...x
  ]);
  const headers = ["#", "Team", "W", "L", "Pct", "PF", "PA", "+/-", "Spirit"];

  const getMatches = useFirebaseGetToArray("matches");
  React.useEffect(() => {
    const unsubscribe = () => {
      let uniqueDates = Array.from(
        new Set(
          getMatches.map(x =>
            moment(x.datetime.toDate()).format("MMMM Do YYYY")
          )
        )
      );
      setUniqueDates(uniqueDates);
    };

    return () => unsubscribe();
  }, []);
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
      <Parallax
        small
        filter
        image={require("assets/img/champs/8-Fall19.jpg")}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <IconHeader icon={FormatListNumbered} title="Standings" />
            <div className={classes.description}>
              <p>Standings determine the seedings for Finals</p>
            </div>
            <Table tableHead={headers} tableData={standingsData} />
          </div>
          <div className={classes.container}>
            <div className={classes.description}>
              <h3>Game Results</h3>
            </div>
            {uniqueDates.map(currentDate => (
              <>
                <h6 style={{ textAlign: "center" }}>{currentDate}</h6>
                <WeeklyResults
                  setUniqueDates={setUniqueDates}
                  currentDate={currentDate}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
