import { Component, OnInit , ViewChild} from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false}) infiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('Cargando siguiente');
    setTimeout(() => {
      if (this.data.length > 50 ) {
        event.target.complete();
       this.infiniteScroll.disabled = true;
        return;
      }
      const nArr = Array(20);
      this.data.push(...nArr);
      event.target.complete();
    }, 1000);

    // setTimeout(() => {
    //   console.log('Done');
    //   event.target.complete();

    //   // App logic to determine if all data is loaded
    //   // and disable the infinite scroll
    //   if (data.length == 1000) {
    //     event.target.disabled = true;
    //   }
    // }, 500);
  }

}
