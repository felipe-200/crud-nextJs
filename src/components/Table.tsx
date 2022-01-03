import Client from '../core/Client'
import { iconEdit, iconTrash } from './icons/icons'
interface TableProps {
  clients: Client[],
  clientSelected?: (client: Client) => void
  clientDeleted?: (client: Client) => void
}
const Table = (props: TableProps) => {
  const showAction = props.clientSelected || props.clientDeleted
  const RenderHead = () => {
    return (
      <tr>
        <th className='text-left p-4'>Cód</th>
        <th className='text-left p-4'>Name</th>
        <th className='text-left p-4'>Age</th>
        {showAction ? <th className='p-4'>Actions</th> : false}
      </tr>
    )
  }
  const RenderData = () => {
    return (
      props.clients?.map((client, i) => {
        return (
          <tr key={client.id}
            className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
          >
            <td className='text-left p-4'>{client.id}</td>
            <td className='text-left p-4'>{client.nome}</td>
            <td className='text-left p-4'>{client.idade}</td>
            {showAction ? renderAction(client) : false}
          </tr>
        )
      })
    )
  }

  const renderAction = (client: Client) => {
    return (
      <td className='flex justify-center'>`
        {
          props.clientSelected ? (
            <button
              className={`
                flex justify-center items-center
                text-green-600 rounded-full p-2 m-1
                hover:bg-purple-50
              `}
              onClick={() => props.clientSelected?.(client)}
            >
              {iconEdit}
            </button>
          ) : false
        }
        {
          props.clientDeleted ? (
            <button
              className={`
                flex justify-center items-center
                text-red-500 rounded-full p-2 m-1
                hover:bg-purple-50
              `}
              onClick={() => props.clientDeleted?.(client)}
            >
              {iconTrash}
            </button>
          ) : false
        }
      </td>
    )
  }

  return (
    <table className='w-full rounded-xl overflow-hidden'>
      <thead className={`
      text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
        {/* <RenderHead /> */}
        {RenderHead()}
      </thead>
      <tbody>
        {/* <RenderData /> */}
        {RenderData()}
      </tbody>
    </table>
  )
}
export default Table