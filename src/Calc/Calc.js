
import './Calc.css';
import React from 'react';


class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': 150,
      'result': 0,
      'value':'EUR'
    }
  }

  seletCurrency = (e) => {
    this.setState({value: e.target.value})
  }

  calcRate = (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    console.log(elements['type-currency'].value);
    let vl = this.state.value;
    let koff = this.props.rate[vl];
    let koll = this.state.name;
    this.setState({result: (koll / koff).toFixed(3)});
  }

  change = (e) => {
    let val = e.target.value;
    this.setState({name: val});
    console.log(this.state.name);
  }

  render() {
  return (
    <div className='calculator'>
      <h3>Калькулятор обмена</h3>
          <div className='block'>
            <div>Я хочу</div>

            <div>
              <form onSubmit={this.calcRate}>

              <input type='number' defaultValue={this.state.name} onChange={this.change} />
              <select name='type-currency' value={this.state.value} onChange={this.seletCurrency}>
                  {Object.keys(this.props.rate).map((keyName, i) =>
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