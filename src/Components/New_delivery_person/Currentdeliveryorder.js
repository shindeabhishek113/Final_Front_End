import React from 'react'
import Delivery_Navbar from './Delivery_Navbar'
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Currentdeliveryorder() {

  const [deliveryPersonOrderList, setdeliveryPersonOrderList] = useState([]);
  var navigate = useNavigate();

  useEffect(() => {
    let deliveryPersonOrderList = JSON.parse(sessionStorage.getItem("user"));

    axios.get("http://localhost:8080/myorder/orderlist/"+deliveryPersonOrderList.id)
    .then(response =>{
        console.log(response.data);
        setdeliveryPersonOrderList(response.data);

     
    })
    .catch(err =>{
      console.log(err);
    })


  },[]);


  return (
    <div>
      <Delivery_Navbar/>
      Currentdeliveryorder

      <table class="table">
  <thead>
    <tr>
      <th scope="col">My Order id</th>
      <th scope="col">Order Price</th>
      <th scope="col">Order Date</th>
      <th scope="col">Delivery Date</th>
      <th scope="col">Order Status</th>
    </tr>
  </thead>

  {
    deliveryPersonOrderList.map((v) => {

      return(
        <tbody>
        <tr>
        <th scope="row">{v.id}</th>
        <td>{v.orderPrice}</td>
        <td>{v.orderDate}</td>
        <td>{v.deliveryDate}</td>
        <td>{v.orderStatus}</td>
        <td><button type="button" class="btn btn-success">Delivered</button></td>
        </tr> 

    
        </tbody>
        )
    })
      
  }

   
  
</table>



      </div>
  )
}

export default Currentdeliveryorder