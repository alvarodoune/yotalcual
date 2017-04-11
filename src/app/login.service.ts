import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LoginService {

      constructor(public http: Http) {

      }

      private sendLogin() {
            //let response = Http.executeGet("Accounts/Accounts/MovementsFile", parameters, false, true).map(this.mapMovementsFileDataResponse.bind(this));
            //let response = Http.request("");
      }
}
