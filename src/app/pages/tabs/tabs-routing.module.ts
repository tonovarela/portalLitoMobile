import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
   path: '',
   redirectTo: 'account'
  },
  {
    path: '',
    component: TabsPage,
    children: [{
      path: 'account',
      loadChildren: '../avatar/avatar.module#AvatarPageModule'
    },
    {
      path: 'list',
      loadChildren: '../list/list.module#ListPageModule'
    },
    {
      path: 'settings',
      loadChildren: '../infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule'
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
