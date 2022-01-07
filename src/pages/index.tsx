import { useState } from "react"
import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {
  const [show, setShow] = useState<'table' | 'form'>('table')
  const [client, setClient] = useState<Client>(Client.empty())
  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4')
  ]

  const clientSelected = (client: Client) => {
    setClient(client)
    setShow('form')
  }
  const clientDeleted = (client: Client) => {
    console.log(client.nome)
  }

  const saveClient = (client: Client) => {
    setShow('table')
    console.log(client)
  }

  const newClient = () => {
    setShow('form')
    setClient(Client.empty())
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Simples Register">
        {show === 'table' ? (
          <>
            <div className="mb-4 flex justify-end">
              <Button color="green" onClick={newClient}>Simple Register</Button>
            </div>
            <Table
              clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            />
          </>

        ) : (
          <Form
            client={client}
            cancel={() => setShow('table')}
            onChange={saveClient}
          />
        )}
      </Layout>
    </div>
  )
}
