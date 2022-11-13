import './Header.scss';
import logo from './images/hex-logo.png';

function Header() {
  return (
    <div className="Header">
      <div className='header-left display-flex'>
        <div className='logo'>
            <img src={logo} />
        </div>
      </div>
      <div className='header-right'>
        <li className='task'>
            <a href="#">關卡任務</a>
        </li>
        <li className='illustrate'>
            <a href="#">競賽說明</a>
        </li>
        <li className='register'>
            <a href="#">立即報名</a>
        </li>
      </div>
    </div>
  );
}

export default Header;
