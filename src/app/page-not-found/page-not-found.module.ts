//region @angularImports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
//endregion

//region yoTalCualImports
import {PageNotFoundComponent} from "./page-not-found.component";
import {AlertModule} from "ng2-bootstrap";
//endregion

const pageNotFoundRoutes: Routes = [
      {
            path: "",
            component: PageNotFoundComponent
      }
];

@NgModule({
      imports: [
            CommonModule,
            RouterModule.forChild(pageNotFoundRoutes),
            AlertModule.forRoot()
      ],
      declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule {
}
