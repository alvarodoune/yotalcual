//region @angular imports
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from '@angular/common';
//endregion

//region YoTalCual imports
import {HomeComponent} from './home.component';
//endregion

const homesRoutes: Routes = [
      {
            path: "",
            component: HomeComponent
      }
];

@NgModule({
      imports: [
            CommonModule,
            RouterModule.forChild(homesRoutes)
      ],
      declarations: [HomeComponent]
})
export class HomeModule {
}
