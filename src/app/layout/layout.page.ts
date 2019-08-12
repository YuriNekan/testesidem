import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  openlHeaderFooter() {
    this.navCtrl.navigateForward('lay-header-footer');
  }

  openlTabs() {
    this.navCtrl.navigateForward('laytabs');
  }

  openlMenu() {
    this.navCtrl.navigateForward('laymenu');
  }

  openlSplit() {
    this.navCtrl.navigateForward('laysplit');
  }
  openlGrid() {
    this.navCtrl.navigateForward('laygrid');
  }

  openlFab() {
    this.navCtrl.navigateForward('fab');
  }

  openlCss() {
    this.navCtrl.navigateForward('css');
  }

}
