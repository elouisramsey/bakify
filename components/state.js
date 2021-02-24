import { useState, useEffect } from 'react'
import cartcontext from '../components/context/context'

const client = require('contentful').createClient({
  space: 'eimn9ocdmaxu',
  accessToken: 'srIPCJpj4gQ_vLDSDF1roP26Dw4b3H1R20RJUKikvPs'
})

const State = (props) => {
  const [cart, setCart] = useState([])
  const [pastries, setPastries] = useState([])
  const [carttotal, setcarttotal] = useState(0)

  useEffect(async () => {
    try {
      const data = await client.getEntries({
        content_type: 'bakify',
        order: 'sys.createdAt'
      })
      setPastries(data.items)
    } catch (error) {}
  }, [])

  // add to cart
  const addToCart = (id) => {
    getTotal()
    if (pastries) {
      const check = cart.every((item) => {
        return item.sys.id !== id
      })

      if (check) {
        const data = pastries.filter((product) => {
          return product.sys.id === id
        })
        setCart([...cart, ...data])
      } else {
        alert('The product has been added to cart.')
      }
    }
  }

  // reduce cart item
  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.sys.id === id) {
        item.fields.count === 1
          ? (item.fields.count = 1)
          : (item.fields.count -= 1)
      }
    })
    setCart(cart)
    getTotal()
  }

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.sys.id === id) {
        item.fields.count += 1
      }
    })
    setCart(cart)
    getTotal()
  }

  const removeProduct = (id) => {
    if (window.confirm('Do you want to delete this product?')) {
      cart.forEach((item, index) => {
        if (item.sys.id === id) {
          cart.splice(index, 1)
        }
      })
      setCart(cart)
      getTotal()
    }
  }

  const getTotal = () => {
    const res = cart.reduce((prev, item) => {
      return prev + item.fields.price * item.fields.count
    }, 0)
    setcarttotal(res)
  }

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cart))
    localStorage.setItem('dataTotal', JSON.stringify(carttotal))
  }, [])

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    if (dataCart !== null) {
      setCart(dataCart)
    }
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'))
    if (dataTotal !== null) {
      setcarttotal(dataTotal)
    }
  }, [])

  return (
    <cartcontext.Provider
      value={{
        addToCart,
        carttotal,
        increase,
        reduction,
        removeProduct,
        cart
      }}
    >
      {props.children}
    </cartcontext.Provider>
  )
}

export default State
