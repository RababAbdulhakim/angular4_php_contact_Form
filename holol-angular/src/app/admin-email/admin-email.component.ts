import {Component, OnInit} from '@angular/core';
import {HandleMailsService} from './../handle-mails.service';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-admin-email',
    templateUrl: './admin-email.component.html',
    styleUrls: ['./admin-email.component.css']
})
export class AdminEmailComponent implements OnInit {

    Hello = 'app';
    data: any = {};
    public message: string;
    interval: any;
     button;
    alert;
    
    constructor(private Emails: HandleMailsService, private http: HttpClient) {
        this.GETdata();

    }
    
    //getting data 

    GETdata() {
        this.Emails.GetData()
            .subscribe((data) => {
                this.data = data;
                return data;

            });
    }

//admin reply to email
    Reply(id: number) {
        let data = {
            "message": this.message,
            "message_id": id,

        }
        this.http.post('http://localhost/Holo/admin', data)
            .subscribe(
            (data) => {
                console.log(data);
                this.updatedata()
            },
            err => {
                console.log("Error occured");
            }
            );

    }
//refresh data comming from server
 
    
    updatedata(){
        this.Emails.GetData()
            .subscribe((data) => {
                this.data = data;
                return data;

            }),
            //update every 1 seconds
           this.button = document.getElementsByClassName("modal-open");
       
          if (!this.button) {
              console.log("ok")
        this.interval = setInterval(() => {
            this.GETdata();
        }, 5000);
        
//this.alert = "<div   class=' reload bg-success'><h3>You have got a message</h3></div>";
}
    }
    
    ngOnInit() {
      
    this.updatedata();

        
    }


}
