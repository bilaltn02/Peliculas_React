import React from 'react'
import CargaCards from './CargaCards'
import {Outlet} from 'react-router-dom';
import '../styles.css'

const Layout = () => {

  return (
    <div className='container'>
      <section>
        <CargaCards/>
        </section>
    
    </div>
  )
}

export default Layout