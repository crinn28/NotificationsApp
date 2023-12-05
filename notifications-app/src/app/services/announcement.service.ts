import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';
import { map, Observable, of } from 'rxjs';
import { Announcement } from '../announcement';
import { AnnouncementComponent } from '../announcement/announcement.component';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  serviceCall() {
    console.log("Service was called");
    }

    readonly baseURL="https://localhost:44302/Announcement";

    readonly httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    constructor(private httpClient: HttpClient) { }

    getAnnouncements():Observable<Announcement[]> {
      return this.httpClient.get<Announcement[]>(this.baseURL, this.httpOptions);
    }
    getCategories():Observable<Category[]> {
      return this.httpClient.get<Category[]>("https://localhost:44302/Categories", this.httpOptions);
    }
    getCategory(id:String){
      return this.httpClient.get<Category>("https://localhost:44302/Categories" + "/"+ id, this.httpOptions);
     }
     getCategoryByName(name:String){
      return this.httpClient.get<Category>("https://localhost:44302/Categories/name" + "/"+ name, this.httpOptions);
     }
  addAnnouncements(announcement:Announcement){
    return this.httpClient.post(this.baseURL,announcement ,this.httpOptions);
  }

  deleteAnnouncement(announcement:Announcement){
    return this.httpClient.delete(this.baseURL+"/" +announcement.id,this.httpOptions);
  }

   getAnnouncement(id:String){
    return this.httpClient.get<Announcement>(this.baseURL + "/"+ id, this.httpOptions);
   }

  editAnnouncements(id:String,newAnnouncement:Announcement){
    return this.httpClient.put<Announcement>(this.baseURL+ "/"+ id ,newAnnouncement, this.httpOptions);
  }
}
