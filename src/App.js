
import './App.css';
import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
  return (
    <div className="site">

    <Header />
      <div className='container'>
        <main>
          <Routes>
            <Route path='/' element={<Rate />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </div>

      <div className='container' id='cookie_info'>
        <div className='site-content'>
          <div className='well'>
            На нашем сайте мы используем cookie для сбора информации
            технического характера.
            <br/>
            В частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего местоположения.
            &nbsp;<button className='btn btn-primary btn-sm'>OK</button>
          </div>
        </div>
      </div>

    <Footer />

    </div>
  );
}
}

export default App;
