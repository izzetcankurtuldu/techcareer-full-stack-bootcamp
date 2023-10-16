import React from 'react'
import { suppliers } from '../data/suppliersData'

function GetSuppliers() {

  return (<>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
    <table className='w3-table w3-striped w3-centered w3-hoverable'>
      <thead>
        <tr className='w3-black'>
          <td>ID</td>
          <td>Company Name</td>
          <td>Contact Name</td>
          <td>Contact Title</td>
        </tr>
      </thead>
      <tbody>
        {
          suppliers && suppliers.map((item) => {
            return <tr>
              <td>{item.id}</td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
            </tr>
          })
        }
      </tbody>
    </table>

  </>)
}

export default GetSuppliers