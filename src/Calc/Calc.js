
import './Calc.css';
import React from 'react';


class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'result': 0,
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {rate: props.rate};
  }

  calcRate = (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    console.log(elements);
    console.log(elements['type-currency'].value);
    console.log(elements['count-currency'].value);
    let tCurr = elements['type-currency'].value;// валюта
    let cCurr = elements['count-currency'].value;// количество
    this.setState({result: (cCurr / this.state.rate[tCurr]).toFixed(3)})
  }


  render() {
  return (
    <div className='calculator'>
      <h3>Калькулятор обмена</h3>
          <div className='block'>
            <div>Я хочу</div>

            <div>
              <form onSubmit={this.calcRate}>

              <input type='number' defaultValue='150' name='count-currency'/>
              <select name='type-currency' >
                  {Object.keys(this.state.rate).map((keyName, i) =>
                    (
                      <option key={keyName} value={keyName}>{keyName}</option>
                    )
                  )}
              </select>
              <input type='submit' value='Расчитать' />
              
              </form>
            </div>

            <div>
              <h4>Результат</h4>
              <ul className='calc-res'>
                <li>RUB {this.state.result}</li>
              </ul>
            </div>

          </div>
    </div>
    );
  }
  
}
  export default Calc;