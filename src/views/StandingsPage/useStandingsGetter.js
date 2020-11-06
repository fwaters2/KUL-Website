import { useEffect, useState } from "react";
import Firebase from "utils/Firebase";

const spiritScores = {
  "Mighty Hucks": "12.00",
  "Disc Jockeys": "12.00",
  "Killa Bees": "11.67",
  Discl3xia: "11.00",
  Port: "10.67",
  "Deez Nuts": "10.00",
};

export default function useStandingsGetter() {
  const [standings, setStandings] = useState([]);
  useEffect(() => {
    const unsubscribe = Firebase.firestore()
      .collection("standings")

      .orderBy("Pct", "desc")
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
