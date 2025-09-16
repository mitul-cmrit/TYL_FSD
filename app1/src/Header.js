import React from 'react'

function Header(props) {
    let x = props.a;
    let y = props.b;
    x = 10; y = 20;
    // props.a = 15;S
    return (
        <div class="page-header" style={{textAlign: 'center'}}>
            I'm The Header
            <br />
            <button type="button" onClick="window.print()" style={{backgroundColor: 'aqua'}}>
                PRINT ME!
            </button>
            <p>{x}</p>
            <p>{y}</p>
            <p>{props.a}</p>
            <p>{props.b}</p>
        </div>)
}

export default Header