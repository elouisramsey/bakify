import { useState, useEffect } from 'react'
import '../styles/tailwind.css'
import cartcontext from '../components/context/context'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])
  const [carttotal, setcarttotal] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const carttotal = JSON.parse(localStorage.getItem('total'))
    if (cart) {
      setCart(cart)
      setcarttotal(carttotal)
    }
  }, [])

  // GET CART TOTAL
  // useEffect(() => {
  //   const res = cart.reduce((prev, item) => {
  //     return prev + item.price * item.count
  //   }, 0)
  //   setcarttotal(res)
  // }, [cart])
  const getTotal = () => {
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count
    }, 0)
    setcarttotal(res)
  }

  // add item to cart
  const addToCart = (id, name, price, img, count) => {
    const check = cart.every((item) => {
      return item.id !== id
    })
    if (check) {
      setCart((cart) => [...cart, { id, name, price, img, count }])
      localStorage.setItem('cart', JSON.stringify(cart))
      getTotal()
    } else {
      alert('The product has been added to cart.')
    }
  }

  // increase item cart count
  const increase = (id) => {
    const evuu = cart
    evuu.forEach((item) => {
      if (item.id === id) {
        item.count += 1
      }
    })
    setcarttotal({ cart: evuu })
    getTotal()
  }

  // decrease cart item
  const reduction = (id) => {
    const evuu = cart
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1)
      }
    })
    setcarttotal({ cart: evuu })
    getTotal()
  }

  // remove from cart
  const removeProduct = (id) => {
    if (window.confirm('Do you want to delete this product?')) {
      const evuu = cart
      evuu.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1)
        }
      })
      setcarttotal({ cart: evuu })
      getTotal()
    }
  }

  return (
    <cartcontext.Provider
      value={{
        cart: cart,
        addToCart: addToCart,
        carttotal: carttotal,
        increase,
        reduction,
        removeProduct
      }}
    >
      <Component {...pageProps} />
    </cartcontext.Provider>
  )
}

export default MyApp
