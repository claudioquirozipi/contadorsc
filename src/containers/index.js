import styled from 'styled-components'

const azul = "#4abdac",
        naranja = "#fc4a1a",
        amarillo = "#f7b733",
        gris = "#dfdce3",
        blanco ="#fff"


export const MainContainer = styled.div`
    background: ${azul};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CounterContainer = styled.div`
    width: 200px;
    border-radius: 5px;
    background: ${gris};
    padding: 15px 25px;
    box-shadow: 3px 3px 15px 5px rgba(0,0,0,.3), 
    inset 1px 1px 5px 3px rgba(255,255,255,.4);
`

export const PantallaSC = styled.div`
    color: #fff;
    font-size: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${amarillo};
    border-radius: 5px;
    margin-bottom: 30px;
    box-shadow: inset 1px 1px 15px 3px rgba(0,0,0,.3), 1px 1px 5px 5px rgba(255,255,255,.5);
`
export const BotonContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
export const BotonSC = styled.div`
    background: ${naranja};
    color: ${blanco};
    font-size: 30px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95px;
    height: 40px;
    border-radius:5px;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,.2), 
    inset 1px 1px 5px 3px rgba(255,255,255,.3);
    
`