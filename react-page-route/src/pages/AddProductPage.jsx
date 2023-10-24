import axios from 'axios'
import React, { useState } from 'react'


function AddProductPage() {

  var [name, setname] = useState();
  var [unitPrice, setunitPrice] = useState();
  var [unitsInStock, setunitsInStock] = useState();

  var addProduct = () => {
    var product = {
      name,
      unitPrice,
      unitsInStock
    }


    axios.post("https://northwind.vercel.app/api/products", product)
      .then(res => console.log(res.data))
  }

  return (
    <>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)}/>
      </div >
      <div>
        <label>Unit Price</label>
        <input type="number" value={unitPrice} onChange={(e) => setunitPrice(e.target.value)} />
      </div >
      <div>
        <label>Units In Stock</label>
        <input type="number" value={unitsInStock} onChange={(e) => setunitsInStock(e.target.value)}/>
      </div >
      <button onClick={addProduct}>Add</button>
    </>
  )
}

export default AddProductPage


