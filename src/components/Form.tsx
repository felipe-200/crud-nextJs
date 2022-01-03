import { useState } from "react"
import Client from "../core/Client"
import Button from "./Button"
import Input from "./Input"

interface formProps {
  client: Client,
  cancel?: () => void,
  onChange: (client: Client) => void
}
const Form = (props: formProps) => {
  const id = props.client?.id
  const [nome, setNome] = useState(props.client?.nome ?? '')
  const [idade, setIdade] = useState(props.client?.idade ?? 0)
  return (
    <div>
      {id ?
        <Input
          label="Código"
          type="text"
          id="nome"
          value={id}
          className="mb-4"
          readonly
        />
        : false}
      <Input
        label="Nome"
        type="text"
        id="nome"
        value={nome}
        onChange={setNome}
        className="mb-4"
      />
      <Input
        label="Idade"
        type="number"
        id="idade"
        value={idade}
        onChange={setIdade}
      />
      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => props.onChange?.(new Client(nome, +idade, id))}
        >{id ? 'Alterar' : 'Salvar'}</Button>
        <Button color="gray" onClick={props.cancel}>Cancelar</Button>
      </div>
    </div >
  )
}
export default Form