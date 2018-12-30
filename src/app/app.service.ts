import { Injectable } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';

//importing observable related code'

import { Observable } from "rxjs/Observable";
//import { catchError,map} from rxjs/operators;
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Syntax } from 'syntax';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http:HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log("err.message");
    return Observable.throw(err.message)
  }

  private baseUrl="https://raw.githubusercontent.com/jeffreylancaster/game-of-thrones/master/data/characters.json"

  public getAllDetails():Observable<any>
  {
    let data=this._http.get(this.baseUrl).catch(this.handleError);
    return data;
  }

}
