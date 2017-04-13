import {PageNotFoundModule} from './../page-not-found/page-not-found.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {ShellComponent} from './shell/shell.component';
import {TopBarComponent} from './shell/top-bar/top-bar.component';
import {MainContentComponent} from './shell/main-content/main-content.component';

const appRoutes: Routes = [
      {
            path: 'home',
            loadChildren: './../home/home.module#HomeModule'
      },
      {
            path: 'login',
            loadChildren: './../login/login.module#LoginModule'
      },
      {
            path: '**',
            loadChildren: './../page-Not-Found/page-not-found.module#PageNotFoundModule'
      }
      // {path: 'home', component: HomeComponent},
      // {path: 'detail', component: DeliveryDetailComponent},
      // {
      //       path: 'delivery',
      //       children: [
      //             {
      //                   path: "",
      //                   component: DeliverysComponent
      //             },
      //             {
      //                   path: ':id',
      //                   component: DeliverysComponent
      //             }
      //       ]
      // },
      // {path: 'delete', component: DeleteDeliveryComponent},

      // {
      //       path: '',
      //       redirectTo: '/login',
      //       pathMatch: 'full'
      // },
      // {
      //       path: '**',
      //       component: PageNotFoundComponent
      // }
];

@NgModule({
      imports: [
            CommonModule,
            RouterModule.forRoot(appRoutes)
      ],
      declarations: [ShellComponent, TopBarComponent, MainContentComponent],
      exports: [ShellComponent]
})
export class CoreModule {
}
