import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import api from '../../services/api'
import { ResultsComponentes } from '../../components'

function Home() {
  const history = useHistory();
  const [data, setData] = useState('');
  const [selected, setSelected] = useState({});

  const [show, setShow] = useState(false);

  useEffect(() => {
    api.get('orcamento').then(response => {
      const data = response.data;
      if (data) {
        data.sort(sortArryData('created_at'));
      }
      setData(data);
    });

  }, []);

  function hadleDelete(id) {

    api.delete('orcamento/' + `${id}`,).then(() => {
      alert('Excluindo com sucesso!');
      history.go(0)
    }).catch(() => {
      alert('Erro no Excluindo.');
    });

  }

  const selectData = (id) => {

    if (data) {
      for (let i = 0; i < data.length; i++) {
        const select = data[i];
        if (id === select.id) {
          setSelected(select);
          hadleOpenModal();
        }
      }
    }
  }

  function sortArryData(array) {
    return function (a, b) {
      if (a[array] < b[array]) {

        return 1;
      } else if (a[array] > b[array]) {
        return -1;
      }
      return 0;
    }
  }
  const hadleCloseModal = () => setShow(false);
  const hadleOpenModal = () => setShow(true);


  return (
    <>
      <ResultsComponentes data={data} selectData={selectData} hadleDelete={hadleDelete} show={show} selected={selected} hadleCloseModal={hadleCloseModal} />

    </>
  )
}
export default Home; 