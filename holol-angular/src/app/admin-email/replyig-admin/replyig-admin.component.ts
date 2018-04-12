import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleMailsService } from './../../handle-mails.service';
import { Emails } from './../../Emails';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable";
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-replyig-admin',
  templateUrl: './replyig-admin.component.html',
  styleUrls: ['./replyig-admin.component.css']
})
export class ReplyigAdminComponent implements OnInit {
id: number ;
  Emails = new Emails();
data:any ={} ;
  constructor(public http: HttpClient ) { 
  
      this.getelement(this.id);
   
     }
 
 
getelement(id: number){
    return this.http.get('http://localhost/Holo/admin/${id}').subscribe((data) => {
                this.data = data;
                return data;

            });
  }
    getHero(id: number){
        
        return this.http.get(`http://localhost/Holo/admin/${id}`).subscribe(response => console.log(response));

  }

 

//   getMovie(id: number): Observable<Emails> {
//        return this.GETdata()
//            .map(emails => emails.find(email => email.id == id));
//    }
  ngOnInit() {
  }

}
