import { Grid } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { object, string, number, date, InferType } from 'yup';

const addProductSchema = object().shape({
  name: string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Boş geçilemez'),
  stock: number()
    .required('Boş geçilemez'),
  unitPrice: number()
    .required('Boş geçilemez'),
  quantityPerUnit: number()
    .required('Boş geçilemez')
});


function AddProduct() {

  const formik = useFormik({
    initialValues: {
      name: '',
      stock: '',
      unitPrice: '',
      quantityPerUnit: '',

    },
    validationSchema: addProductSchema,
    onSubmit: values => {
      addProduct(values)
    },
  });

  const addProduct = (data) => {
    axios.post('https://northwind.vercel.app/api/products', data)
      .then(res => {
        console.log(res);
        alert('Success')
      })
  }


  return (<>

    <form onSubmit={formik.handleSubmit}>
      <Grid container>
      <Grid item md={6} xs={12}>
      <div>
        <label htmlFor="">Name</label>
        <input
          name='name'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {
          formik.errors.name ? <span style={{ color: 'red' }}>{formik.errors.name}</span> : <></>
        }
      </div>
      </Grid>

      <Grid item md={6} xs={12}>
      <div>
        <label htmlFor="">Stock</label>
        <input
          name='stock'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.stock}
        />
        {
          formik.errors.stock ? <span style={{ color: 'red' }}>{formik.errors.stock}</span> : <></>
        }
      </div>
      </Grid>

      <Grid item md={6} xs={12}>
      <div>
        <label htmlFor="">Unit Price</label>
        <input
          name='unitPrice'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.unitPrice}
        />
        {
          formik.errors.unitPrice ? <span style={{ color: 'red' }}>{formik.errors.unitPrice}</span> : <></>
        }
      </div>
      </Grid>

      <Grid item md={6} xs={12}>
      <div>
        <label htmlFor="">Quantity Per Unit</label>
        <input
          name='quantityPerUnit'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.quantityPerUnit}
        />
        {
          formik.errors.quantityPerUnit ? <span style={{ color: 'red' }}>{formik.errors.quantityPerUnit}</span> : <></>
        }
      </div>
      </Grid>

      <Grid>
      <div>
        <button type='submit'>Add</button>
      </div>
      </Grid>
      
      </Grid>

    </form>

  </>)
}

export default AddProduct