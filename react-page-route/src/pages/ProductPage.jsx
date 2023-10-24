import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductPage() {

  const [products, setproducts] = useState([])

  useEffect(() => {
    loadProducts();
  }, [])

  const loadProducts = () => {
    axios.get('https://northwind.vercel.app/api/products')
      .then(res => {
        setproducts(res.data)
      })
  }

  const deleteProduct = (id) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`)
      .then(res => {
        loadProducts()
      })

  }

  return (
  <>
    {
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map(item => {
              return <tr>
                <td><Link to={'/products/' + item.id}>{item.id}</Link></td>
                <td>{item.name}</td>
                <td>{item.unitPrice}</td>
                <td>{item.unitsInStock}</td>
                <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    }

  </>

  )
}


export default ProductPage