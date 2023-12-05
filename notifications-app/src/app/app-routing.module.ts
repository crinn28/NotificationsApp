import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  { path: '', component: HomeComponent, pathMatch:"full" },
  { path: "add", component: AddAnnouncementComponent },
  { path: "edit/:id", component: EditAnnouncementComponent },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: '' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
