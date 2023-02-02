import { useState } from 'react'
import image_product_desktop from './assets/image-product-desktop.jpg'
import icon_cart from "./assets/icon-cart.svg"
import image_product_mobile from './assets/image-product-mobile.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function changeColor() {
    document.getElementById('button').style.backgroundColor = 'rgb(26, 64, 46)'
  }

  function changeColorAgain() {
    document.getElementById('button').style.backgroundColor = 'hsl(158, 36%, 37%)'
  }  

  return (
    <div className="App mx-5 my-7 md:m-0">
      <div className="text-left rounded-full md:w-[600px] h-[450px] md:flex">
        <img className='min-width-300 w-full rounded-t-lg max-h-60 object-cover md:w-1/2 md:rounded-l-lg md:max-h-full md:rounded-r-none' src={image_product_desktop} alt="" />
        <div className='py-8 pl-8 bg-white rounded-b-lg flex flex-col md:w-1/2 md:rounded-r-lg md:rounded-l-none'>
          <span className='text-xs font-montserrant font-medium tracking-widest dark-grayish-blue mb-3'>PERFUME</span>

          <div className='title flex flex-col mb-5 font-fraunces'>
            <span className='sub-title'>Gabrielle</span>
            <span className='sub-title'>Essence Eau</span>
            <span className='sub-title'>De Parfum</span>
          </div>

          <div className="dark-grayish-blue font-medium text-sxm leading-normal mr-12 mt-3 mb-5 antialiased">
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </div>

          <div className='mt-2 flex gap-4 mb-5'>
            <span className='dark-cyan font-bold font-fraunces text-32xl tracking-wider'>$149.99</span>
            <span className='mt-3 dark-grayish-blue line-through text-sm tracking-wider'>$169.99</span>
          </div>

          <MyButton onMouseEnter={changeColor} onMouseLeave={changeColorAgain}/>

        </div>
      </div>
    </div>

  )
}

function MyButton({ onMouseEnter, onMouseLeave }) {  
  return (
    <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} id="button" className='p-3 rounded-lg bg-dark-cyan mr-8 text-white font-montserrant font-medium items-center flex justify-center gap-2'>
              <img src={icon_cart} alt="" /> 
                Add to Cart 
    </button>
  );
}

export default App
