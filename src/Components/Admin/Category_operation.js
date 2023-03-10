import React from 'react'
import Admin_navbar from './Admin_navbar';
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';


function Category_operation() {

  const [allCategoryList, setallCategoryList] = useState([]);


    useEffect(() => {
     
      axios.get("http://localhost:8080/category")
      .then(response =>{
          console.log(response.data);
          setallCategoryList(response.data);       
      })
      .catch(err =>{
        console.log(err);
      })
  
  
    },[]);


    const editCategory = (categoryId) => {
      console.log("prod id: "+categoryId);

      axios.delete("http://localhost:8080/category/delete/"+categoryId)
      .then(response =>{
          console.log(response.data); 
         swal("Category Deleted Succesfully")
      })
      .catch(err =>{
        console.log(err);
      })
        
      }


  return (
    <div>
      
      <Admin_navbar/>
      

      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Category Name</th>

    </tr>
  </thead>

  {
   allCategoryList.map((v) => {

      return(

        <tbody>
        <tr>
        <th scope="row">{v.id}</th>
        <td>{v.categoryName}</td>

        <td><button type="button" class="btn btn-success" >Edit</button></td>
        <td><button type="submit" class="btn btn-danger" onClick={() => editCategory(v.id)}>Delete</button></td>
        </tr> 

    
        </tbody>
        )
    })
      
  } 
</table>  
    </div>
  )
}

export default Category_operation