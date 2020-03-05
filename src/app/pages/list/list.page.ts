import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista', { static: false }) lista: IonList;
  users: Observable<any>;

  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }


              ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(item) {
    this.presentToast('Se guardo en favoritos');
    this.lista.closeSlidingItems();

  }
  share(item) {
    this.presentToast('Share');
    this.lista.closeSlidingItems();
  }

}