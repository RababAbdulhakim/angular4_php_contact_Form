import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HandleMailsService} from './handle-mails.service';
import { RouterModule, Routes } from '@angular/router';
import { AdminEmailComponent } from './admin-email/admin-email.component';
import { UserEmailComponent } from './user-email/user-email.component';
import { ReplyigAdminComponent } from './admin-email/replyig-admin/replyig-admin.component';

const appRoutes: Routes = [
  { path: '', component: UserEmailComponent },
  { path: 'admin',      component: AdminEmailComponent },
  { path: 'admin/email/view/:id',      component: ReplyigAdminComponent },

    
];


@NgModule({
  declarations: [
    AppComponent,
    AdminEmailComponent,
    UserEmailComponent,
    ReplyigAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AppComponent,HandleMailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
