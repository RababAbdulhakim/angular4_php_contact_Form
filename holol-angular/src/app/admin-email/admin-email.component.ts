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
            },
            err => {
                console.log("Error occured");
            }
            );

    }
//refresh data comming from server
    refreshData() {
        this.Emails.UpdateData(); 
    }
    ngOnInit() {

        this.Emails.GetData()
            .subscribe((data) => {
                this.data = data;
                return data;

            }),
            this.refreshData();
            //update every 1 seconds
        this.interval = setInterval(() => {
            this.GETdata();
        }, 10000);
    }


}
