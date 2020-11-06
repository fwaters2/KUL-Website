import { useEffect, useState } from "react";
import Firebase from "utils/Firebase";

export default function useSeasonStatGetter(gender) {
  const [seasonStats, setSeasonStats] = useState([]);
  useEffect(() => {
    const unsubscribe = () =>
      Firebase.firestore()
        .collection("seasonStats")
        .where("gender", "==", gender)
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
