import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

import ButtonComponentes from "../../components/Button"
import InputComponentes from "../../components/Input"
import { Content, Buttons, ButtonsForms, Forms } from "./styled"



export default function AddOrcamento() {
  const history = useHistory();

  const [cliente, setCliente] = useState('');
  const [vendedor, setVendedor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  function hadleCreteOrcamento(e) {
    e.preventDefault();
    if (cliente && vendedor && valor && descricao) {
      api.post('orcamento', {
        cliente,
        vendedor,
        descricao,
        valor: Number(valor),
      }).then(() => {
        alert('Cadastro realizado com sucesso!');
        history.push('/')
      }).catch(() => {
        alert('Erro no cadastro.');
      });
    } else {
      alert('coloque todos os dados');
    }
  }

  return (

    <Content>

      <Forms onSubmit={hadleCreteOrcamento}>

        <InputComponentes
          name="cliente"
          label="cliente"
          value={cliente}
          type="text"

          onChange={(e) => { setCliente(e.target.value) }}
        />

        <InputComponentes
          name="vendedor"
          label="vendedor"
          value={vendedor}
          type="text"

          onChange={(e) => { setVendedor(e.target.value) }}
        />

        <InputComponentes
          name="descriçao"
          label="descriçao"
          value={descricao}
          type="text"
          onChange={(e) => { setDescricao(e.target.value) }}
        />
        <InputComponentes
          name="valor"
          label="valor"
          value={valor}
          type="number"
          onChange={(e) => { setValor(e.target.value) }}
        />
        <ButtonsForms>
          <ButtonComponentes type="submit" variant="success" name='Salvar Cadastro' />
        </ButtonsForms>

      </Forms>


    </Content>

  )
} 