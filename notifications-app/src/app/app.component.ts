import { Component, OnInit } from '@angular/core';
import { Announcement } from './announcement';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'notifications-app';
}
