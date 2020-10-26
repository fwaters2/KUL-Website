import { useEffect, useState } from "react";
import Firebase from "utils/Firebase";

export default function useStandingsGetter() {
  const [standings, setStandings] = useState([]);
  useEffect(() => {
    const unsubscribe = Firebase.firestore()
      .collection("standings")

      .orderBy("Pct", "desc")
      .onSnapshot(querySnapshot => {
        var standings = [];
        querySnapshot.forEach(doc => {
          let { team, wins, losses, Pct, PF, PA, plusMinus } = doc.data();
          standings = [
            ...standings,
            [team, wins, losses, Pct, PF, PA, plusMinus]
          ];
        });
        setStandings(standings);
      });
    return () => unsubscribe();
  }, []);
  return standings;
}
