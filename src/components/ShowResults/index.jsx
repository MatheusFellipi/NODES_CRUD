import React from 'react'
import { useHistory } from 'react-router-dom';

import Results from '../Results'
import EditarOrcamento from '../EditarOrcamento'
import Button from '../Button'
import { Content, Header, TextTitle, Buttons } from "./styled";

export default function ShowResults({ data, selectData, hadleDelete, hadleCloseModal, selected, show, }) {
  const history = useHistory();

  const hadleCrete = () => {
    history.push('/AddOrcamento')
  }

  return (
    <Content>
      <Header>
        <TextTitle>Nomes</TextTitle>
        <TextTitle>Vendedor</TextTitle>
        <TextTitle>Descriçao</TextTitle>
        <TextTitle>Valor</TextTitle>
        <TextTitle>Datas</TextTitle>


      </Header>
      <Results data={data} selectData={selectData} hadleDelete={hadleDelete} />

      <EditarOrcamento show={show} selected={selected} hadleCloseModal={hadleCloseModal} />
      <Buttons>
        <Button variant="info" name="Criar Orcamento" hadleFuction={hadleCrete} />
      </Buttons>
    </Content >
  )
}
