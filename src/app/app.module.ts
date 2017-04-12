import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AlertModule} from "ng2-bootstrap";
import {CoreModule} from "./core/core.module";
import {ShellComponent} from "./core/shell/shell.component";

@NgModule({
      declarations: [
            AppComponent
      ],
      imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            CoreModule,
            RouterModule.forRoot(appRoutes),
            AlertModule.forRoot()
      ],
      providers: [],
      bootstrap: [ShellComponent]
})
export class AppModule {
}
