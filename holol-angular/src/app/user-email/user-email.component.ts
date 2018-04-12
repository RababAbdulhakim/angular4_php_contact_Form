import { Component, OnInit , OnChanges } from '@angular/core';
import {Http,Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HandleMailsService } from './../handle-mails.service';
import { Emails } from '../Emails';
import {AdminEmailComponent} from '../admin-email/admin-email.component';


@Component({
  selector: 'app-user-email',
  templateUrl: './user-email.component.html',
  styleUrls: ['./user-email.component.css']
})
export class UserEmailComponent implements OnInit  {

  title = 'app';
   public id: number;
   public email: string;
   public  name:string;
   public  message:string;
   public message_address:string;
   public phone:string;
    
 constructor( private Emails:HandleMailsService,public http: HttpClient ) {
 
 }  
 submitted = false;
  OnSubmit(){
      
      
           let data = {
          "email":this.email,
          "name":this.name,
          "message_address":this.message_address,
          "message":this.message,
          "phone":this.phone,
      }
      this.http.post('http://localhost/Holo/rest-api', data)
      .subscribe(
        (data) => {
          console.log(data);
           window.location.reload();
        },
        err => {
          console.log("Error occured");
        }
      );
      
  }      
    getlist (){
       console.log("ok");
       // window.location.reload();
}

    

  ngOnInit() {
  }

}
