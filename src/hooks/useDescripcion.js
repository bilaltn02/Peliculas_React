
import { useEffect, useState } from "react";
import {getPelicula} from "../services/datos.js";

const useOnePelicula = (param) => {

  const [pelicula, setPelicula] = useState({});

  const loadPelicula = async () => {
    const onePelicula = await getPelicula(param);
    setPelicula(onePelicula);
  };

  useEffect(() => {
    loadPelicula();
  }, [param]);


  return [pelicula];
};

export default useOnePelicula;