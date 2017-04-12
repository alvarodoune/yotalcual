import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {ShellComponent} from './shell/shell.component';
import {TopBarComponent} from './shell/top-bar/top-bar.component';
import {MainContentComponent} from './shell/main-content/main-content.component';
import {LoginComponent} from "../login/login.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const appRoutes: Routes = [
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
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
      {
            path: '',
            redirectTo: '/login',
            pathMatch: 'full'
      },
      {
            path: '**',
            component: PageNotFoundComponent
      }
];

@NgModule({
      imports: [
            CommonModule,
            RouterModule
      ],
      declarations: [ShellComponent, TopBarComponent, MainContentComponent],
      exports: [ShellComponent]
})
export class CoreModule {
}
