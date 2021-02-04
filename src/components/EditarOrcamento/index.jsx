import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { useHistory } from 'react-router-dom';


import ButtonComponentes from "../Button"
import InputComponentes from "../Input"
import { ContentDetalhes, DetalhesBody, Forms, Buttons, ButtonsForms } from "./styled"

export default function EditarOrcamento({ selected, hadleCloseModal, show }) {
  const history = useHistory();

  const [cliente, setCliente] = useState('');
  const [vendedor, setVendedor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [id, setID] = useState('');

  useEffect(() => {
    setCliente(selected.cliente);
    setVendedor(selected.vendedor);
    setValor(selected.valor);
    setID(selected.id);

  }, [selected.cliente])

  function hadleCreteOrcamento(e) {
    e.preventDefault();

    api.put('orcamento/' + `${id}`, {
      cliente,
      vendedor,
      valor: Number(valor),

    }).then(() => {
      alert('Atualizaçao realizado com sucesso!');
      history.go(0)
    }).catch(() => {
      alert('Erro no Atualizaçao.');
    });
  }

  return (

    <ContentDetalhes show={show} onHide={hadleCloseModal}>
      <DetalhesBody>
        <Buttons>
          <ButtonComponentes variant="danger" hadleFuction={hadleCloseModal} name='fechar' />
        </Buttons>
        <Forms onSubmit={hadleCreteOrcamento}>

          <InputComponentes
            name="cliente"
            label="cliente"
            value={cliente}
            type="text"

            onChange={(e) => { setCliente(e.target.value) }}
          />
          <InputComponentes
            name="descricao"
            label="descricao"
            value={descricao}
            type="text"

            onChange={(e) => { setDescricao(e.target.value) }}
          />

          <InputComponentes
            name="vendedor"
            label="vendedor"
            value={vendedor}
            type="text"

            onChange={(e) => { setVendedor(e.target.value) }}
          />
          <InputComponentes
            name="valor"
            label="valor"
            value={valor}
            type="number"
            onChange={(e) => { setValor(e.target.value) }}
          />
          <ButtonsForms>
            <ButtonComponentes type="submit" variant="success" name='Atualizar Cadastro' />
          </ButtonsForms>

        </Forms>


      </DetalhesBody>


    </ContentDetalhes>
  )
}
