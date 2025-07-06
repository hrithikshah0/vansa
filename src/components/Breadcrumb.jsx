import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

const Breadcrumb = () => {
  return (
    <section class="navigation-section">
      <div class="container navigation-container flex">
        <a href="Home.html">
          <p style="color:darkgrey;">Home</p>
        </a>
        <p><FaGreaterThan /></p>
        <p>Cart</p>
      </div>
    </section>
  )
}

export default Breadcrumb
