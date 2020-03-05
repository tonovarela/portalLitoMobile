
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  heroes: Observable<any>;
  busqueda = '';
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = '';
    this.heroes = this.dataService.getHeroes();
    this.busqueda = this.segment.value;
  }
  segmentChanged(e) {
    this.busqueda = e.detail.value;
    console.log(this.busqueda);

  }
}
