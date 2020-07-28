import styled from "styled-components";


const Button = styled.button`  
    color: #f8b700;   
    border: 1px solid #7b2011;   
    box-sizing: border-box;   
    cursor: pointer;   
    padding: 16px 24px;   
    font-style: normal;   
    font-weight: bold;   
    font-size: 16px;   
    outline: none;   
    border-radius: 5px;   
    text-decoration: none;   
    display: inline-block; 
    transition: opacity .3s;  
    &:hover, 
    &:focus {   
    opacity: .5;
    color:#7b2011   ; /*#9de80d;*/
    border: 1px solid  #f8b700;  
    }  

`;

export default Button;