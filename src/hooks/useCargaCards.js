import React, {useState, useEffect} from 'react'
import {getPeliculas} from '../services/datos.js';

const useCargaCards = () => {
    const [imgs, setImgs] = useState([]);

    const loadImgs = async () => {
        const fotos = await getPeliculas();
        setImgs(fotos);
      };

    useEffect(() => {
        loadImgs();
      }, []);

  return [imgs];
}

export default useCargaCards