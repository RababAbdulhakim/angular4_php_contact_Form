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
   data;
   interval
  constructor(  private http:HttpClient) { }
GetData() {
    return this.http.get('http://localhost/Holo/index');
  }
//  update (){
//       this.GetData()
//            .subscribe((data) => {
//                this.data = data;
//                return data;
//
//            })
//  }
//      updatedata(){
//              
//              console.log("ok")
//        this.interval = setInterval(() => {
//            this.update();
//        }, 5000);
//        
////this.alert = "<div   class=' reload bg-success'><h3>You have got a message</h3></div>";
//}
//


}

 