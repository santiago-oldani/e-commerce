import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ItemDetail from "../item_products/ItemDetail";
import { getItemById } from "../../app/api";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const getItemByIdApi = async () => {
      let product = await getItemById(id);
      setProductDetail(product);
    };
    getItemByIdApi();
  }, []);

  return (
    <>
      {productDetail ? (
        <ItemDetail
          productDetail={productDetail}
          setProductDetail={setProductDetail}
        />
      ) : null}{" "}
    </>
  );
};

export default ItemDetailContainer;