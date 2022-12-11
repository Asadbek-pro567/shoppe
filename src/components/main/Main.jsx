import React, { useState } from 'react'
import './Main.css'
import Zrak from '../image/Img.svg'
import Wish from '../image/Wishlist.png'
import Zanjir from '../image/zanjir.png'
import Image from '../image/Img02.png'
import Image1 from '../image/Img04.png'


function Main() {
    let num = JSON.parse(window.localStorage.getItem('ARR1'))
    const [count, setCount] = useState(num)
    
    window.localStorage.setItem('ARR1', JSON.stringify(count))
    // window.localStorage.setItem('arr', JSON.stringify(arr))

    return (
    <>
    <div className="container">
        <div className='main__inner'>
            <div className='main__img'>
                <img src={Zrak} alt="" />
                <img src={Zrak} alt="" />
                <img src={Zrak} alt="" />
                <img src={Zrak} alt="" />
            </div>
            <img src={Zrak} alt=""  className='main__inner__img'/>
            <div className='main__list'>
                <h3>Lira Earrings</h3>
                <p>$ 20,00</p>
                <h6>1 customer review</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </p>
                <div className="flex">
                    <div className='main__btn'>
                        <button onClick={()=>setCount(count > 0? count - 1 : count)}>-</button>
                        <h5>{num}</h5>
                        <button onClick={()=>setCount(count + 1)}>+</button>
                    </div>
                    <button className='add'>Add to cart</button>
                </div>
                <img src={Wish} alt="" className='img__wish' />
                <h4>SKU: <span>12</span></h4>
                <h4>Categories: <span>Fashion, Style</span></h4>
            </div>
        </div>

        <div className="main">
            <div className="main__flex">
                <h3>Description</h3>
                <h3>Aditional information</h3>
                <h3>Reviews(0)</h3>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.</p>
        </div>

        <div>
            <h2>Similar items</h2>
            <div className='flex flex2'>
                <div>
                    <img src={Zanjir} alt="" />
                    <h4>Ollie Earrings</h4>
                    <p>$ 30,00</p>
                </div>
                <div>
                    <img src={Image} alt="" />
                    <h4>Hal Earrings</h4>
                    <p>$ 25,00</p>
                </div>
                <div>
                    <img src={Image1} alt="" />
                    <h4>Kaede Hair Pin Set Of 3</h4>
                    <p>$ 30,00</p>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Main