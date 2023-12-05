import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})
export class EditAnnouncementComponent implements OnInit {

  categories:Category[]=[];
  title:String='';
  message:String='';
  author:String='';
  imageUrl:String='';
  selectedCategory:String='';
  cat: String='';
  
   announcement:Announcement={
    id:"",
    author:"",
    categoryId:"",
    title:"",
    message:"",
    imageUrl:""
  };
  constructor(private announcementService: AnnouncementService, private route: ActivatedRoute) { 
    this.announcementService.getCategories().subscribe((values)=>this.categories=values);
  }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    if(id!=null)
    {
      let announcement_=this.announcementService.getAnnouncement(id).subscribe(ann=>{
        if(ann!=null)
      {
        this.announcement=ann;
        this.title=ann.title;
        this.message=ann.message;
        this.author=ann.author;
        this.imageUrl=ann.imageUrl;
        this.selectedCategory=ann.categoryId;
      }
      });
    }
  }

  editAnouncement(){
    const announcementEdit:Announcement={
      id:this.announcement.id,
      title: this.title,
      message: this.message,
      author: this.author,
      categoryId: this.selectedCategory,
      imageUrl: this.imageUrl
    };
    if(this.announcement.id!=null)
    {
      this.announcementService.editAnnouncements(this.announcement.id, announcementEdit).subscribe();
    }
  }

}
