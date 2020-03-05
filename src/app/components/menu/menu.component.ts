import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: Observable<Componente>;
  constructor(private dataService: DataService) {
   }

  ngOnInit() {
    this.items = this.dataService.getMenuOpts();
  }

}
