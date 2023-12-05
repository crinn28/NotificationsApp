import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  @Input('announce') announcement:Announcement={
    id:'',
    author:'',
    categoryId:'',
    title:'',
    message:'',
    imageUrl:''
  };

  constructor(private announcementService: AnnouncementService, private router:Router) { }

  ngOnInit(): void {
  }

  deleteAnnouncement(announcement:Announcement){
    this.announcementService.deleteAnnouncement(announcement).subscribe(()=>{
      this.router.navigateByUrl("");
    });
  }
}
