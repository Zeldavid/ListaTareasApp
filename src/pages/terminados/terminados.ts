import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeseoProvider } from '../../providers/deseo/deseo';
import { Lista } from '../../models/lista.model';
import { AgregarPage } from '../agregar/agregar';

/**
 * Generated class for the TerminadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html',
})
export class TerminadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public deseoProvider: DeseoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminadosPage');
  }

  // itemSelected( lista: Lista ) {
  //   console.log(lista);
  // }

  itemSelected ( lista: Lista ) {
    this.navCtrl.push( AgregarPage, {
      titulo: lista.titulo,
      lista: lista
    });
  }

  borrarLista( lista: Lista ) {
    this.deseoProvider.borrarLista(lista);
  }
}
