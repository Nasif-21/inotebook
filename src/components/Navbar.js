import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    // Google Analytics
    console.log(location.pathname)
  }, [location]);
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home<i class="fa-solid fa-house-chimney mx-2"></i></Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About<i class="fa-solid fa-address-card mx-2"></i></Link>
        </li>
   
        
      </ul>
      <form className="d-flex ">
        
      <a className="btn btn-primary mx-2" href="#" role="button"><i class="fa-solid fa-right-to-bracket fa-bounce"></i></a>
      <a className="btn btn-primary mx-2" href="#" role="button"><i class="fa-solid fa-user-plus fa-flip"></i></a>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar