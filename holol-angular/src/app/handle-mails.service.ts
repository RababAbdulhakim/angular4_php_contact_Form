import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Emails} from './Emails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HandleMailsService {
    
           emails$: Observable<Emails[]>;



  public id: number;
   public email: string;
  public  name:string;
   public message_address:string;
   public phone:string;
  constructor(  private http:HttpClient) { }
GetData() {
    return this.http.get('http://localhost/Holo/index');
  }
 getHeroes (): Observable<Emails[]> {
  return this.http.get<Emails[]>(this.http://localhost/Holo/index);

}

 
  UpdateData(){
       let data = this.http.get('http://localhost/Holo/index').map((data)=>{
        return data.json();
    }).do((data)=>{
        this.emails$.next(data);
    })
  }
  
  deleteData (email: Email | number): Observable<Email> {
  const id = typeof email === 'number' ? email : email.id;
  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Hero>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}

}

 