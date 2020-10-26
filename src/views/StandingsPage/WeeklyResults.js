import React from "react";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import SingleGame from "./SingleGame";
import moment from "moment";
import Firebase from "utils/Firebase";

export default function WeeklyResults(props) {
  const { currentDate } = props;
  const [currentTimes, setCurrentTimes] = React.useState([]);
  const [data, setData] = React.useState([]);

  function getFirebaseArray(name) {
    let newArray = [];

    return Firebase.firestore()
      .collection(name)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          newArray = [...newArray, { id: doc.id, ...doc.data() }];
        });

        return newArray;
      });
  }

  function getFirebaseObject(name) {
    let objectData = {};
    return Firebase.firestore()
      .collection(name)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          objectData = {
            ...objectData,
            [doc.id]: doc.data()
          };
        });

        return objectData;
      });
  }

  React.useEffect(() => {
    const getMatches = getFirebaseArray("matches");

    const getResults = getFirebaseObject("results");

    const getTeams = getFirebaseObject("teams");

    Promise.all([getMatches, getTeams, getResults])
      .then(values => {
        let betterMatchData = values[0]
          .filter(
            x =>
              moment(x.datetime.toDate()).format("MMMM Do YYYY") === currentDate
          )
          .map(game => ({
            id: game.id,
            day: moment(game.datetime.toDate()).format("MMMM Do YYYY"),
            time: moment(game.datetime.toDate()).format("LT"),
            homeScore: values[2][game.id] ? values[2][game.id].homePts : "",
            awayScore: values[2][game.id] ? values[2][game.id].awayPts : "",
            homeTeamData: {
              id: game.team_home,
              name: values[1][game.team_home].name,
              colorPrimary: values[1][game.team_home].colorPrimary,
              colorSecondary: values[1][game.team_home].colorSecondary
            },
            awayTeamData: {
              id: game.team_away,
              name: values[1][game.team_away].name,
              colorPrimary: values[1][game.team_away].colorPrimary,
              colorSecondary: values[1][game.team_away].colorSecondary
            }
          }));

        let uniqueTimes = Array.from(
          new Set(betterMatchData.map(x => x.time))
        ).sort();
        setCurrentTimes(uniqueTimes);

        setData(betterMatchData);
      })
      .catch(x => console.log("error", x));
  }, [currentDate]);

  return (
    <Table>
      <TableBody>
        {currentTimes.map(time => (
          <TableRow key={time}>
            <TableCell
              style={{
                borderBottom: "none",
                paddingRight: 0,
                textAlign: "center"
              }}
            >
              {time}
            </TableCell>

            {data
              .filter(x => x.day === currentDate && x.time === time)
              .map(match => (
                <TableCell
                  key={match.id}
                  style={{ width: "50%", borderBottom: "none" }}
                >
                  <SingleGame data={match} />
                </TableCell>
              ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
