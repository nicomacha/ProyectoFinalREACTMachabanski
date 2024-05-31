import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((prodSnap) => {
      if (prodSnap.exists()) {
        setItem({ id: prodSnap.id, ...prodSnap.data() });
      }
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row my-5">
        <ItemDetail prod={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
