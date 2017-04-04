import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AlertModule} from 'ng2-bootstrap';


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
      declarations: [
            AppComponent,
            LoginComponent,
            PageNotFoundComponent
      ],
      imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot(appRoutes),
            AlertModule.forRoot()
            // AdministrationModule
      ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule {
}
