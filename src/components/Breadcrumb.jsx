import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../css/BreadCrumb.css' // Import the CSS file for styling

const Breadcrumb = ({ current }) => {
  return (
    <section className="navigation-section">
      <div className="container navigation-container flex">
        <Link to="/home" className="text-grey">
          Home
        </Link>
        <p><FaGreaterThan /></p>
        <p>{current}</p>
      </div>
    </section>
  )
}

export default Breadcrumb
