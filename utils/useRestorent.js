import { useEffect, useState } from "react";
import { API_SUBRES } from "../utils/contents";
const useRestorent = (resId) => {
  const [reInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_SUBRES + resId.resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return reInfo;
};
export default useRestorent;
