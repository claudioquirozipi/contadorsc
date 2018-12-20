import React, { Component } from 'react';
import Pantalla from './components/pantalla';
import Boton from './components/boton'
import {  Button,
          MainContainer,
          CounterContainer,
          BotonContainer } 
  from './containers/index';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contador: 0
    }
    this.sumar = this.sumar.bind(this)
    this.restar = this.restar.bind(this)
  }
  sumar() {
    this.setState(() => {
      return({contador: this.state.contador + 1})
      }
    )
  }
  restar() {
    this.setState(() => {
      return({contador: this.state.contador - 1})
      }
    )
  }
  render() {
    return (
      <MainContainer>
        <CounterContainer>
          <Pantalla contador={this.state.contador}/>
          <BotonContainer>
            <Boton operacion="+" functionOperation={this.sumar}/>
            <Boton operacion="-" functionOperation={this.restar}/>
          </BotonContainer>
        </CounterContainer>
      </MainContainer>
    );
  }
}

export default App;
