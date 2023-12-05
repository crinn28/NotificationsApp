import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[]=[];

  constructor(private announcementService: AnnouncementService) { 
    this.announcementService.getCategories().subscribe((values)=>this.categories=values);
  }

  @Output() selectedCategoryEmitter = new EventEmitter<String>();

  ngOnInit(): void {
  }

  onClick(category:String){
    this.selectedCategoryEmitter.emit(category);
  }

}
