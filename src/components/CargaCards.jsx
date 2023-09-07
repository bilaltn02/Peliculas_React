import React, { useState, useEffect } from 'react'

import useCargaCards from '../hooks/useCargaCards.js';
import MostrarCards from './MostrarCards.jsx';
import '../styles.css';


const CargaCards = () => {
    const [imgs] = useCargaCards();

    return (
        <div className='container-carga'>
            <header>
                <h1 className="text-center lead fs-1 text-secondary">Ribera Films</h1>
            </header>
            <section className="container d-flex flex-wrap gap-5 mt-5 justify-content-center">

                {imgs.map((img) => (
                   
                        <MostrarCards key={img.id} img={img} />
                   
                ))}
            </section>
        </div>
    )
}

export default CargaCards