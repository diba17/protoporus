import { Link } from 'react-router-dom'
import LennyFaceBlink from './lennyfaceblink'

function Navbar() {
  return (
    <nav className='navbar' style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <div className='LennyFace'>
         <LennyFaceBlink/><span>$LennyFace Coin</span><LennyFaceBlink/>
      </div>
      <div className='navLinks'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Gallery">Lenny's Gallery</Link>
        <Link to="/Purchase">BUY $LENNY</Link>

      </div>
    </nav>
  )
}

export default Navbar
