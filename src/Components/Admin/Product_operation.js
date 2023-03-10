import React from 'react'
import Admin_navbar from './Admin_navbar';
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import swal from "sweetalert"

function Product_operation() {

  const [allProductList, setallProductList] = useState([]);


  useEffect(() => {
   
    axios.get("http://localhost:8080/products/view")
    .then(response =>{
        console.log(response.data);
        setallProductList(response.data);       
    })
    .catch(err =>{
      console.log(err);
    })


  },[]);

  const deleteProduct = (productId) => {
    console.log("prod id: "+productId);

    axios.delete("http://localhost:8080/products/"+productId)
    .then(response =>{
        console.log(response.data); 
       swal("Products Deleted Succesfully")
    })
    .catch(err =>{
      console.log(err);
    })
      
    }
  return (
    <div>
      
      <Admin_navbar/>
      Product_operation

      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Weight</th>
      <th scope="col">Rating</th>
      <th scope="col">Part Number</th>
      {/* <th scope="col">Price</th>
      <th scope="col">Discount</th>
      <th scope="col">Final Price</th>
      <th scope="col">Quantity</th> */}
    </tr>
  </thead>

  {
    allProductList.map((v) => {
      // let v=c.products;
      // console.log("C: "+c);
      console.log("V: "+v);

      return(
        <tbody>
        <tr>
        <th scope="row">{v.id}</th>
        <td>{v.productName}</td>
        <td>{v.description}</td>
        <td>{v.weight}</td>
        <td>{v.rating}</td>
        <td>{v.partNumber}</td>
        {/* <td>{c.price}</td>
        <td>{c.discount}</td>
        <td>{c.finalPrice}</td>
        <td>{c.quantity}</td> */}

        
        <td><button type="button" class="btn btn-danger" onClick={() => deleteProduct(v.id)}>Delete</button></td>
        </tr> 

    
        </tbody>
        )
    })
      
  }

   
  
</table>

      
      
    </div>
  )
}

export default Product_operation