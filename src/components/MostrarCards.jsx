import React from 'react'
import '../styles.css';
import { Link } from 'react-router-dom';

const MostrarCards = ({ img }) => {
    return (

        <div>
            {/* {img.poster} */}
            <Link key={img.id} to={"/" + img.id} className='enlace'>
                <article className="card p-2 ancho">
                    <img className="card-img-top" src={img.poster} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title text-center texto">{img.title}</p>
                    </div>
                </article>
            </Link>
        </div>
    )
}

export default MostrarCards