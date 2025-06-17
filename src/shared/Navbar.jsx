import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
    var {cart} = useSelector(state=>state.productR)

  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-info">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">EdifyCart</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/counter">Counter</Link>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <Link className='btn btn-warning btn-lg' to="/cart">
                    Cart
                    <i class="bi bi-cart4">
                        <b className='badge rounded-pill text-bg-success'>{cart.length}</b>
                    </i>
                </Link>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar