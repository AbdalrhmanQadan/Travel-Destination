
import style from 'styled-components';


export const GridDiv = style.div`
    display: grid;
    gap: 50px 100px;
    grid-template-columns: auto auto auto;
    padding: 10px;
`
    ;
export const Button = style.button`
        background-color: #008CBA; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
      `
    ;