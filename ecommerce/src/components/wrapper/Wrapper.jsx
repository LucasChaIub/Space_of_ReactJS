import React from 'react'
import './style.css'

import {FaTruck, FaIdCard, FaHeadset, FaShieldAlt } from 'react-icons/fa'

const Wrapper = () => {
  const data = [
    {
      cover: <i><FaTruck /></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i><FaIdCard /></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i><FaShieldAlt /></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i><FaHeadset /></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <>
                <div className="product" key={index}>
                  <div className="img icon-circle-w">
                    <i>{val.cover}</i>
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.decs}</p>
                </div>
              </>
            )  
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
