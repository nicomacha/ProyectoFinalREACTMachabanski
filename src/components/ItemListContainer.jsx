import { useEffect, useState } from "react";
import Itemlist from "./ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import Loading from "./Loading";

const ItemListCointainer = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "productos");
    const queryCollection = id
      ? query(productosCollection, where("categoria", "==", id))
      : productosCollection;
    getDocs(queryCollection).then((prodSnap) => {
      if (prodSnap.size > 0) {
        setItems(
          prodSnap.docs.map((prod) => ({
            id: prod.id,
            ...prod.data(),
          }))
        );
        setVisible(false);
      }
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row my-5">
        {visible ? <Loading /> : <Itemlist items={items} />}
      </div>
    </div>
  );
};

export default ItemListCointainer;
