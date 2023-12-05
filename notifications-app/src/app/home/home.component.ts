import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { NotificationServiceService } from '../notification-service.service';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  announcements: Observable<Announcement[]>;
  filtredAnnouncements:Observable<Announcement[]>;
  categories: Category[]=[];
  
  selectedCategory: String='';
  notificationMessage: string='';
  
  constructor (private announcementService: AnnouncementService, private notificationService:NotificationServiceService ){
    this.announcements = this.announcementService.getAnnouncements();
    this.filtredAnnouncements = this.announcements;
    this.announcementService.getCategories().subscribe((values)=>this.categories=values);
  }

  ngOnInit(): void {
    this.notificationService.initWebSocket();
    this.notificationService.notificationSubject.subscribe(hasNotifications => this.notificationMessage = hasNotifications ? "New notifications, please refresh the page" : "");
  }

  changeCategory(category:String){
    this.selectedCategory=category;
    if(category==''||category=='All'){
      this.filtredAnnouncements=this.announcements;
    }else{
      this.filtredAnnouncements=this.announcements.pipe(map(result => {
        return result.filter(item =>item.categoryId==this.selectedCategory)
      }))
    }
  }  

}
