import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled, { css } from 'styled-components';


const Main = styled.main
`
background-color:#141414;
color:var(--white);
flex:1;
padding-top:50px;
padding-left:5%;
padding-right:5%;
${({paddingAll}) => css`
padding:${paddingAll};
`}
`;

function PageDefault({children, paddingAll }){
    return(

        <React.Fragment> 

        <Menu />
        <Main paddingAll={paddingAll}>
        {children}
        </Main>
        <Footer />
        </React.Fragment> 
    );
}

export default PageDefault;