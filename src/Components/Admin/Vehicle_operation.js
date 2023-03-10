import React from 'react'
import Admin_navbar from './Admin_navbar';
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function Vehicle_operation() {

  const [allVehicleList, setallVehicleList] = useState([]);


    useEffect(() => {
      // let allProductList = JSON.parse(sessionStorage.getItem("user"));

      axios.get("http://localhost:8080/vehicle")
      .then(response =>{
          console.log(response.data);
          setallVehicleList(response.data);       
      })
      .catch(err =>{
        console.log(err);
      })
  
  
    },[]);


  return (
    <div>

      <Admin_navbar/>
      Vehicle_operation
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Vehicle Name</th>
    </tr>
  </thead>

  {
    allVehicleList.map((v) => {

      return(

        <tbody>
        <tr>
        <th scope="row">{v.id}</th>
        <td>{v.vehicleName}</td>
        <td><button type="button" class="btn btn-success" >Edit</button></td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr> 

    
        </tbody>
        )
    })
      
  }

   
  
</table>

    
    </div>
  )
}

export default Vehicle_operation