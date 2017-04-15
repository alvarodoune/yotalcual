import {Component, OnInit} from '@angular/core';
import {Form} from '@angular/forms';

@Component({
      selector: 'ytc-login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

      constructor() {
      }

      ngOnInit() {
      }

      private login(f: Form) {
            console.log(f);
      }

}
