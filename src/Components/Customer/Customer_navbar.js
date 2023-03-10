import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import Button from 'react-bootstrap/esm/Button';
import { Form } from 'react-router-dom';
import { MDBCol, MDBIcon } from "mdbreact";



function Customer_navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">


          <li className="nav-item"><Link className="nav-link" to="/home">E-Spare Store</Link></li>
          <li className="nav-item"><Link className="nav-link">    </Link></li>
          <li className="nav-item"><Link className="nav-link" to="/customer">Customer</Link></li>
          <li className="nav-item"><Link className="nav-link">    </Link></li>
          <li className="nav-item"><Link className="nav-link" to="/customer/cart">Cart</Link></li>
          <li className="nav-item"><Link className="nav-link">    </Link></li>


          <li className="nav-item">
           <Dropdown>
           <Dropdown.Toggle variant="light" id="dropdown-basic">Profile</Dropdown.Toggle>
           <Dropdown.Menu>
           <Link className="nav-link" to="/update">Update</Link>
           <Link className="nav-link" to="/signout">Sign Out</Link>
            </Dropdown.Menu>
            </Dropdown>
          </li>
         
          {/* <MDBCol>
          <form >
          <MDBIcon icon="search" />
          <input className="form-control form-control-sm ml-10 w-175" type="text" placeholder="Search" aria-label="Search" />
          <button type='submit'>Search</button>
          </form>
          </MDBCol> */}
        </ul>
      </div>
    </nav> 
  )
}

export default Customer_navbar