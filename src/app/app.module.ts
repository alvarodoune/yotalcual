//region @angularImports
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
//endregion

//region yoTalCualImports
import {AppComponent} from "./app.component";
import {CoreModule} from "./core/core.module";
import {ShellComponent} from "./core/shell/shell.component";
//endregion

@NgModule({
      declarations: [
            AppComponent
      ],
      imports: [
            BrowserModule,
            HttpModule,
            CoreModule
      ],
      providers: [],
      bootstrap: [ShellComponent]
})
export class AppModule {
}
