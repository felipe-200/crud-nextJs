import Client from "./Client";

export default interface ClientRepositorie {
  save(client: Client): Promise<Client>
  delete(client: Client): Promise<void>
  getAll(): Promise<Client[]>
}