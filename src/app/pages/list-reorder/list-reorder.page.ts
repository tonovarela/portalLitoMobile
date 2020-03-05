import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];
  constructor() { }

  ngOnInit() {
  }
  reorder(e) {
    console.log('Antes', this.personajes);
    this.personajes = e.detail.complete(this.personajes);
    console.log('Despues', this.personajes);
  }
  onClick() {
    console.log(this.personajes);
  }

}
