import styled from 'styled-components';

export const ContendInput = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
export const Contend = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
export const Input = styled.input.attrs({
  placeholder: ''
})`  
  border-radius:10rem;
  border-color: #d0d0d0;
  outline:none;
  width: 31rem;
  height: 2.5rem;
  padding:15px;
  ::placeholder {
    color:  #090909;
  }
`;
export const Label = styled.label`
 
  color: #000000;
  display: flex;
  align-items: flex-start;
  width:100px;
  font-size: 1rem;
  margin:1rem 24.5rem 1rem 0;
  cursor: text;
  transition: .2s ease-in-out;
  box-sizing: border-box;
`;
