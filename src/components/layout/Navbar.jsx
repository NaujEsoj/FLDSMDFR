import {Link} from 'react-router-dom'
import Fldsmdfr from "../assets/FLDSMDFR.png"

function Navbar() {
  return (

    
<div className="navbar bg-primary text-primary-content bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/datacellgen' className='text-lg font-bold align-middle'>Data cell Gen</Link></li>
        <li><Link to='/termsgen' className='text-lg font-bold align-middle'>Terms Gen</Link></li>
      </ul>
    </div >
        <Link to='/' className='text-lg font-bold align-middle self-center p-2'>
          FLDSMDFR
          <img src={Fldsmdfr} className='inline w-8 m-2' alt="fireSpot"/>
        </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/datacellgen' className='text-lg font-bold align-middle'>Data cell Gen</Link></li>
      <li><Link to='/termsgen' className='text-lg font-bold align-middle'>Terms Gen</Link></li>
    </ul>
  </div>
  <div className="navbar-end"><Link to='/about' className='align-middle mx-4 font-bold'>About</Link></div>
</div>
  )
}

export default Navbar