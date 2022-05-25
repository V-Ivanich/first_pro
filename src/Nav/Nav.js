
import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

  render() {
  return (
        <div className='header-nav'>
        <div className='container'>
          <nav>
            <ul className='ul'>
              <Link to='/' className='li_k'>Главная</Link>
              <Link to='/' className='li_k'>Пункты обмена</Link>
              <Link to='/about' className='li_k'>Контакты</Link>
            </ul>
          </nav>
        </div>
      </div>
        );
      }
      }
      
      export default Nav;