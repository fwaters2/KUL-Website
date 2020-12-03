import { useEffect, useState } from "react";
import Firebase from "utils/Firebase";

const spiritScores = {
  "Mighty Hucks": "11.40",
  "Disc Jockeys": "11.20",
  "Killa Bees": "10.50",
  Discl3xia: "10.70",
  Port: "10.70",
  "Deez Nuts": "10.80",
};

export default function useStandingsGetter() {
  const [standings, setStandings] = useState([]);
  useEffect(() => {
    const unsubscribe = Firebase.firestore()
      .collection("standings")

      .orderBy("Pct", "desc")
      .orderBy("plusMinus", "desc")
      .onSnapshot((querySnapshot) => {
        var standings = [];
        querySnapshot.forEach((doc) => {
          let { team, wins, losses, Pct, PF, PA, plusMinus } = doc.data();
          let aveSpirit = spiritScores[team];
          Pct = "." + Math.round(Pct * 1000);
          standings = [
            ...standings,
            [team, wins, losses, Pct, PF, PA, plusMinus, aveSpirit],
          ];
        });
        setStandings(standings);
      });
    return () => unsubscribe();
  }, []);
  return standings;
}
