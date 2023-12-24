import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('items') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeItem: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomeItem,
      data: new Date().toLocaleDateString('pt-BR'),
      comprado: false
    }

    return item;
  }

  adicionaItemLista(nomeItem: string) {
    const item = this.criarItem(nomeItem);
    this.listaDeCompra.push(item);
  }

  editarItemLista(itemAntigo: Item, newNameItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: newNameItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }
    const id = itemAntigo.id;

    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado)
  }

  atualizarLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.listaDeCompra));
  }
}
