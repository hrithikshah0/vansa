import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

const Breadcrumb = ({current}) => {
  return (
    <section className="navigation-section">
      <div className="container navigation-container flex">
        <a href="Home.html">

          {/* style="color:darkgrey;" */}
          <p>Home</p>
        </a>
        <p><FaGreaterThan /></p>
        <p>{current}</p>
      </div>
    </section>
  )
}

export default Breadcrumb
