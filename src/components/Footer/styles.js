import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 1px solid #7b2011;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
