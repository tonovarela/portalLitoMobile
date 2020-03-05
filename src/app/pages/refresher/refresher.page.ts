import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
   items: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  doRefresh(e) {
    setTimeout(() => {
    this.items = Array(50);
    e.target.complete();
    }, 1500);

  }
}
