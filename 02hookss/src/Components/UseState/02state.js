import { useState } from 'react';

export default function Use02State() {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    ano: '',
  });

  const handlechange = (e) => {
    if (e.target.getAttribute('name') == 'fnome') {
      setForm({
        nome: e.target.value,
        sobrenome: form.sobrenome,
        ano: form.ano,
      });
    }

    if (e.target.getAttribute('name') == 'fsobrenome') {
      setForm({
        nome: form.nome,
        sobrenome: e.target.value,
        ano: form.ano,
      });
    }

    if (e.target.getAttribute('name') == 'fano')
      setForm({
        nome: form.nome,
        sobrenome: form.sobrenome,
        ano: e.target.value,
      });
  };

  return (
    <div className="containeruserState">
      <label>Nome</label>
      <input
        type="text"
        name="fnome"
        value={form.fnome}
        onChange={(e) => handlechange(e)}
      />

      <br />

      <label>SobreNome</label>
      <input
        type="text"
        name="fsobrenome"
        value={form.fsobrenome}
        onChange={(e) => handlechange(e)}
      />

      <br />

      <label>Ano</label>
      <input
        type="number"
        name="fano"
        value={form.fano}
        onChange={(e) => handlechange(e)}
      />

      <p>Nome Digitado: {form.nome}</p>
      <p>SobreNome Digitado: {form.sobrenome}</p>
      <p>ano Digitado: {form.ano}</p>
    </div>
  );
}
