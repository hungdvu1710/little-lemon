import VerticalLogo from '../assets/Asset 20@4x.png';
import HorizontalLogo from '../assets/Logo.svg'
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <img src={VerticalLogo} alt='logo' />
      <img src={HorizontalLogo} alt='logo' />
      <div className='footer-links'>
        <h4>Doormat Navigation</h4>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/booking'>Reservations</a>
        <a href='/'>Order Online</a>
        <a href='/'>Login</a>
      </div>
      <div className='footer-links'>
        <h4>Contact</h4>
        <a href='/'>Address</a>
        <a href='/'>Phone Number</a>
        <a href='/'>Email</a>
      </div>
      <div className='footer-links'>
        <h4>Social Media Links</h4>
        <a href='/'>Facebook</a>
        <a href='/'>Instagram</a>
        <a href='/'>Twitter</a>
      </div>
    </footer>
  )
};

export default Footer;