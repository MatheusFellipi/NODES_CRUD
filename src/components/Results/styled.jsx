import styled from 'styled-components';

import { Modal } from 'react-bootstrap';
export const ContentDetalhes = styled(Modal)`
  display:flex;
  justify-content:center;
  align-items:center;

`;
export const DetalhesBody = styled(Modal.Body)`
  background-color: #3B3B39;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  max-width: 960px;
  width:45vw;
  margin: 0 auto;
  padding: 25px;
  color: #FFF;
`;

export const Text = styled.p`
 width:100%;
 text-align:center;
 margin-bottom:10px;

`;
export const ContentResults = styled.div`
  background-color:#ebebeb;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding: 1rem;
  width:96vw;

`;

export const CardResult = styled.div`
   display:flex;
  justify-content:space-between;
  align-items:center;
  border-bottom: 1px solid #7A7A7A;
  text-align:center;
  width:90vw;

  `;

export const TextResults = styled.h6`
  margin:1rem 6rem 1rem 2rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width: 1rem;
  color: #6b6b6b;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
`;
