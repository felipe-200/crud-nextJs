import { useState } from "react"
import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {
  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4')
  ]

  const clientSelected = (client: Client) => {
    console.log(client.nome)
  }
  const clientDeleted = (client: Client) => {
    console.log(client.nome)
  }

  const saveClient = (client: Client) => {
    console.log(client)
  }

  const [show, setShow] = useState<'table' | 'form'>('table')


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {show === 'table' ? (
          <>
            <div className="mb-4 flex justify-end">
              <Button color="green" onClick={() => setShow('form')}>Simple Register</Button>
            </div>
            <Table
              clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            />
          </>

        ) : (
          <Form
            client={clients[2]}
            cancel={() => setShow('table')}
            onChange={saveClient}
          />
        )}
      </Layout>
    </div>
  )
}
