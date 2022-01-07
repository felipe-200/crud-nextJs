import firestore from "../config";
import { collection, getDoc, getFirestore, QueryDocumentSnapshot, SnapshotOptions, updateDoc } from "firebase/firestore";
import Client from "../../core/Client";
import ClientRepositorie from "../../core/ClientRepositorie";

export default class CollectionClient implements ClientRepositorie {
  #conversor = {
    // toFireStore(client: Client) {
    //   return {
    //     nome: client.nome,
    //     idade: client.idade
    //   }
    // },
    // fromFireStore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Client {
    //   const data = snapshot.data(options)
    //   return new Client(data.nome, data.idade, snapshot.id)
    // }
  }
  // async save(client: Client): Promise<Client> {
  //   return null
  // }
  // async delete(client: Client): Promise<void> {
  //   // return await getDoc(this.collections)
  //   return updateDoc()
  // }
  // async getAll(): Promise<Client[]> {
  //   return null
  // }

  save(client: Client): Promise<Client> {
    throw new Error("Method not implemented.");
  }
  delete(client: Client): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Client[]> {
    throw new Error("Method not implemented.");
  }
  private collections() {
    // const db = getFirestore(firebase)
    return collection(firestore, 'Clients')
  }
}