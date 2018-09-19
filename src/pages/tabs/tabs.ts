import { Component } from '@angular/core';
import { PendientesPage } from '../pendientes/pendientes';
import { TerminadosPage } from '../terminados/terminados';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;

  tab1Root = PendientesPage;
  tab2Root = TerminadosPage;

  constructor() {

  }
}
