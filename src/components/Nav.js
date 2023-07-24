import HorizontalLogo from '../assets/Logo.svg'
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <img src={HorizontalLogo} alt="Little Lemon Horizontal logo" />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservation</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
};

export default Nav;