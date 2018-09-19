import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeseoProvider } from '../../providers/deseo/deseo';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  lista: Lista;
  nombreItem: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public deseoProvider: DeseoProvider) {
    console.log(this.navParams.get('titulo'));
    const titulo = this.navParams.get('titulo');
    if(this.navParams.get('lista')){
      this.lista = this.navParams.get('lista');
    } else {
      this.lista = new Lista(titulo);
      this.deseoProvider.agregarLista( this.lista );
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }
  
  agregarItem () {
    if (this.nombreItem.length === 0) {
      return
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push( nuevoItem );
    this.deseoProvider.guardarStorage();
    this.nombreItem = '';
  }

  actualizarTarea( item: ListaItem) {
    item.completado = !item.completado;
    const pendientes = this.lista.items.filter(itemData => {
      return !itemData.completado;
    }).length;

    if(pendientes == 0) {
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    } else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }
    this.deseoProvider.guardarStorage();
  }

  borrar( idx: number ) {
    this.lista.items.splice(idx, 1);
    this.deseoProvider.guardarStorage();
  }
}
