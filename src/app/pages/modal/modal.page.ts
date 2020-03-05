import { ModalInfoPage } from './../modal-info/modal-info.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  dataPadre = {
    nombre : 'Holi',
    pais: 'Mexico'
  };


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async onClick() {
  const modal = await this.modalCtrl.create({
    component: ModalInfoPage,
   componentProps : this.dataPadre
  });
  await modal.present();
  const { data } = await modal.onDidDismiss();
  if ( data !== undefined) {
    this.dataPadre = data;
   }

  }

}
