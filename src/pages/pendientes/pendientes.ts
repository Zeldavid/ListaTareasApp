import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DeseoProvider } from '../../providers/deseo/deseo';
import { Lista } from '../../models/lista.model';
import { AgregarPage } from '../agregar/agregar';

/**
 * Generated class for the PendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public deseoProvider: DeseoProvider, private alertCtrl: AlertController) {
  }

  // ionViewDidLoad() {
  //   console.log('PendientesPage Inicializado');
  // }

  itemSelected ( lista: Lista ) {
    this.navCtrl.push( AgregarPage, {
      titulo: lista.titulo,
      lista: lista
    });
  }

  agregarLista() {
    const alerta = this.alertCtrl.create({
      title: 'NuevaLista',
      message: 'Nombre de la nueva lista que desea',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar'
      },{
        text: 'Agregar',
        handler: data => {
          if(data.titulo.length === 0) {
            return;
          }
          this.navCtrl.push(AgregarPage, {
            titulo: data.titulo
          });
        }
      }]
    });

    alerta.present();
  }

  borrarLista( lista: Lista ) {
    this.deseoProvider.borrarLista(lista);
  }
}
