import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  constructor(private dataService: DataService) { }

   albums: Observable<any[]>;
   busqueda = '';
  ngOnInit() {
   this.albums = this.dataService.getAlbums();
  }

  buscar(e) {
   this.busqueda = e.detail.value;

  }

}
