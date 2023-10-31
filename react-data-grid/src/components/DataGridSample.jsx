import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

function DataGridSample() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    axios.get('https://northwind.vercel.app/api/products')
      .then(res => {
        console.log(res);
        setProducts(res.data)
      })

  }, [])

  const handleDeleteButton = (id) => () => {
    axios.delete("https://northwind.vercel.app/api/products/" + id)
      .then(res => {
        setProducts(products.filter((product) => product.id !== id));
      })
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'unitPrice', headerName: 'Unit Price', width: 200 },
    { field: 'unitsInStock', headerName: 'Stock Status', width: 200 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Delete',
      width: 200,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<RemoveCircleRoundedIcon />}
            label='Delete'
            onClick={handleDeleteButton(id)}
          />
        ]
      }
    }
  ]

  return (<>

    <DataGrid
      columns={columns}
      rows={products}
    />

  </>
  )
}

export default DataGridSample