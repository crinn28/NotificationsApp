import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { NotificationServiceService } from '../notification-service.service';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  title:String='';
  message:String='';
  author:String='';
  imageUrl:String='';
  selectedCategory:String='';
  categories: Category[]=[];

  constructor(private announcementService: AnnouncementService, private notificationService:NotificationServiceService,
    private router:Router) { 
    this.announcementService.getCategories().subscribe((values)=>this.categories=values);
  }

  ngOnInit(): void {
  }

  addAnouncement(){
    const announcement:Announcement={
      title: this.title,
      message: this.message,
      author: this.author,
      categoryId: this.selectedCategory,
      imageUrl: this.imageUrl
    };
    this.announcementService.addAnnouncements(announcement).subscribe(
      r =>{ this.notificationService.sendMessage("BroadcastMessage", [r])
      this.router.navigateByUrl('')}
      );
  }

  cancel(){

  }
}
