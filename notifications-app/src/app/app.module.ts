import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CategoriesComponent } from './categories/categories.component';
import {MatButtonModule} from '@angular/material/button';
import { PrepositionPipe } from './preposition.pipe';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { AnnouncementService } from './services/announcement.service';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import  { HttpClientModule } from '@angular/common/http';
import { NotificationServiceService } from './notification-service.service';
import * as signalR from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    CategoriesComponent,
    PrepositionPipe,
    AddAnnouncementComponent,
    HomeComponent,
    EditAnnouncementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [AnnouncementService,
              NotificationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
