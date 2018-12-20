import React, { Component } from 'react';
import {BotonSC} from '../containers/index'

class Boton extends Component {
    render() {
        return(
            <BotonSC onClick={this.props.functionOperation}>
                {this.props.operacion}
            </BotonSC>
        );
    }
}
export default Boton; 