import {Component, OnInit} from '@angular/core';
import {logging} from "selenium-webdriver";

@Component({
      selector: 'ytc-top-bar',
      templateUrl: './top-bar.component.html',
      styles: [`
          .nav-total-container {
              display: block;
              margin-bottom: 10px;
          }
      `]
})
export class TopBarComponent implements OnInit {

      public byEmail = true;

      constructor() {
      }

      ngOnInit() {
      }

      toggle() {
            console.log("toogle");
            this.byEmail = !this.byEmail;
      }
}
