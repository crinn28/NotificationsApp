import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  private connection!: signalR.HubConnection;
public notificationSubject: BehaviorSubject<boolean>;
 
 constructor(){
    this.notificationSubject = new BehaviorSubject(false);
  }

 initWebSocket() {
    this.connection = new HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Information)
    .withUrl('https://localhost:44302/hub/notifications')
    .build();
 
    this.connection.on('message_received', (body: any) => {
      console.log(body);
      this.notificationSubject.next(true);
    });
 
    this.connection.start().then( () => {
      }
    );
 }

 sendMessage(methodName: string, parameters?: any[]){
  this.connection.send(methodName, parameters);
}


}
