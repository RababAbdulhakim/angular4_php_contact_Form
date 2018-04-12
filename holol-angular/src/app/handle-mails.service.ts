import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Emails} from './Emails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HandleMailsService {
    


  public id: number;
   public email: string;
  public  name:string;
   public message_address:string;
   public phone:string;
  constructor(  private http:HttpClient) { }
GetData() {
    return this.http.get('http://localhost/Holo/index');
  }
}


}

 