
import './Rate.css';
import React from 'react';
import Calc from '../Calc/Calc';


class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'currencyRate': {}
    }
    this.currency = ['USD', 'EUR', 'CAD', 'UAH'];
    this.getRate();
  }
  getRate = () => {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
      .then(data => {
        return data.json()
      })
      .then(data => {
        console.log(data);
        this.setState({date: data.date});
        let result = {};
        for(let i = 0; i < this.currency.length; i++){
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        console.log(result);
        this.setState({currencyRate: result});
      })
  }
  render() {
  return (
    <div className='rate'>
                <h3>Курс валют на {this.state.date}</h3>
          <div className='flex-container'>
            {Object.keys(this.state.currencyRate).map((keyName, i) =>
            (
            <div className='block flex-item' key={keyName}>
               <div className='currency-name'>{keyName}</div>
               <div className='currency-in'>{(1 / this.state.currencyRate[keyName]).toFixed(2)} руб.</div>
               <p>* Курс за 1 единицу</p>
            </div>
            )
            )}
          </div>
          <Calc rate = {this.state.currencyRate}/>
    </div>
    );
  }
  }
  
  export default Rate;