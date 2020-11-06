import { useEffect, useState } from "react";
import Firebase from "utils/Firebase";

export default function useRookieStatGetter(gender) {
  const [seasonStats, setSeasonStats] = useState([]);
  useEffect(() => {
    const unsubscribe = () =>
      Firebase.firestore()
        .collection("seasonStats")
        .where("gender", "==", gender)
        .where("isRookie", "==", true)
        .orderBy("points", "desc")
        .onSnapshot((querySnapshot) => {
          var seasonStats = [];
          querySnapshot.forEach((doc) => {
            let { name, team, ds, assists, goals, points } = doc.data();
            seasonStats = [
              ...seasonStats,
              [name, team, assists, goals, ds, points],
            ];
          });
          setSeasonStats(seasonStats);
        });
    return unsubscribe();
  }, []);
  return seasonStats;
}
