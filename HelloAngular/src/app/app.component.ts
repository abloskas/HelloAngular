import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RESTful API';
  tasks = [];
  displayDesc = "";
  displayTitle = "";

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    // this.getTasksFromService();
  }
 
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data['data'];
    });
    
}

displayTask(id: string): void { 
  console.log(`Click event is working with task id ${id} `);
  let observable = this._httpService.getTasksbyId(id);
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.displayDesc = data['data']['description'];
      this.displayTitle = data['data']['title'];
    });

}



}

