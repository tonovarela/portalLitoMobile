import { PopinfoComponent } from './popinfo/popinfo.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ],
  exports:
  [HeaderComponent, MenuComponent, PopinfoComponent]
})
export class ComponentsModule { }
