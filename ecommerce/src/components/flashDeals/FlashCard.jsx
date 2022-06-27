import React, {useState} from 'react'
import Slider from 'react-slick'

import { AiOutlineHeart } from 'react-icons/ai'
import { FaStar, 
        FaPlus, 
        FaLongArrowAltRight, 
        FaLongArrowAltLeft } from 'react-icons/fa'

const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i><FaLongArrowAltRight /></i>
      </button>
    </div>
  )
}

const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i><FaLongArrowAltLeft /></i>
      </button>
    </div>
  )
}

const FlashCard = ({ productItems, addToCart }) => {
const [count, setCount] = useState(0)
const increment = () => {
  setCount(count + 1);
}

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <>
      <Slider {...settings}>
        {
          productItems.map((productItems) => {
            return (
              <div className="box">
                <div className="product mtop">
                  <div className="img">
                    <span className="discount">{productItems.discount}% Off</span>
                    <img src={productItems.cover} alt="" />
                    <div className="product-like">
                      <label>0</label> <br />
                      <i onClick={increment}><AiOutlineHeart /></i>
                    </div>
                  </div>
                  <div className="product-details">
                    <h3>{productItems.name}</h3>
                    <div className="rate">
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                    </div>
                    <div className="price">
                      <h4>{productItems.price}.00</h4>
                      <button onClick={() => addToCart(productItems)}>
                        <i><FaPlus /></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </Slider>
    </>
  )
}

export default FlashCard