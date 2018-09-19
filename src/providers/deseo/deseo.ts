import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lista } from '../../models/lista.model';

/*
  Generated class for the DeseoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeseoProvider {

  listas: Lista[] = [];

  constructor(public http: HttpClient) {

    this.cargarStorage();
    // const lista1 = new Lista('recolectar piedras del infinito');
    // const lista2 = new Lista('heroes a vencer');
    // this.listas.push(lista1, lista2);
    // console.log(this.listas);
  }

  agregarLista ( lista: Lista ) {
    this.listas.push(lista);
    this.guardarStorage();
  }

  guardarStorage () {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  borrarLista(lista: Lista) {
    this.listas = this.listas.filter(listaData => {
      return listaData.id != lista.id
    });

    this.guardarStorage();
  }

  cargarStorage () {
    if(localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }
}
