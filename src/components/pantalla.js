import React, { Component} from 'react';
import { PantallaSC } from '../containers/index';

class Pantalla extends Component {
    render() {
        return(
            <div>
                <PantallaSC>
                    {this.props.contador}
                </PantallaSC>
            </div>
        );
    }
}

export default Pantalla;