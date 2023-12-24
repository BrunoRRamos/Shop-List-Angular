import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemEditar!: Item;
  editando = false;
  textobtn = 'Salvar item'

  valorItem!: string;

  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemEditar'].firstChange) {
      this.editando = true;
      this.textobtn = 'Editar item';
      this.valorItem = this.itemEditar?.nome;
    }
  }

  limparCampo() {
    this.valorItem = '';
    this.editando = false;
    this.textobtn = 'Salvar item';
  }

  adicionarItem() {
    this.listaService.adicionaItemLista(this.valorItem);
    this.limparCampo();
  }

  editarItem() {
    this.listaService.editarItemLista(this.itemEditar, this.valorItem);
    this.limparCampo();
  }
}
