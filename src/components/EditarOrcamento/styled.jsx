import styled from 'styled-components';


import { Modal } from 'react-bootstrap';

export const Forms = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
export const ContentDetalhes = styled(Modal)`
  display:flex;
  justify-content:center;
  align-items:center;
  background: linear-gradient(#cecece);

`;
export const ContentDetalhesHeader = styled(Modal.Header)`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color: #8f8f8f;
`;

export const DetalhesBody = styled(Modal.Body)`
  background-color: #797979;
  width: 80vw;
  height:80vh;
  max-width: 960px;
  margin: 0 auto;
  padding: 25px;
  color: #FFF;
`;
export const DetalhesTitle = styled(Modal.Title)`
  background-color: #3B3B39;
  font-family:${(props) => props.theme.fonts.bold};
  font-size:24px;
`;
export const ButtonsForms = styled.div`
  margin:2rem 0rem 0rem 23rem;
`;
export const Buttons = styled.div`
  margin-left:46rem;
`;