import { useEffect, useState } from "react";
import Firebase from "utils/Firebase";

export default function useFirebaseGetToArray(collection) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubscribe = Firebase.firestore()
      .collection(collection)
      .get()
      .then(querySnapshot => {
        var allData = [];
        querySnapshot.forEach(doc => {
          let newData = doc.data();
          allData = [...allData, newData];
        });
        setData(allData);
      });
    return () => unsubscribe();
  }, []);
  return data;
}
