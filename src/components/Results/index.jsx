import React, { useState } from 'react'
import { ContentResults, Buttons, CardResult, TextResults, ContentDetalhes, DetalhesBody, Text } from './styled'
import Button from '../Button'
export default function Results({ data, selectData, hadleDelete }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ContentResults>
      {data ? <div>
        {data.map((item) => (
          <CardResult key={item.id} >
            <TextResults>
              {item.cliente}
            </TextResults>
            <TextResults>
              {item.vendedor}
            </TextResults>
            <TextResults>
              {item.descricao}
            </TextResults>
            <TextResults>
              {item.valor}
            </TextResults>
            <TextResults>
              {item.created_at}
            </TextResults>

            <Buttons>
              <Button variant="info" hadleFuction={() => selectData(item.id)} name="EDITAR" />
              <Button variant="danger" hadleFuction={handleShow} name="DELETE" />
            </Buttons>

            <ContentDetalhes show={show} onHide={handleClose}>
              <DetalhesBody>
                <Text>Deseja deletar?</Text>
                <Button variant="danger"
                  hadleFuction={() => hadleDelete(item.id)}
                  name="DELETE" />
              </DetalhesBody>

            </ContentDetalhes>

          </CardResult>
        ))}

      </div> : <div>sem Resposta</div>}
    </ContentResults>



  )
}
