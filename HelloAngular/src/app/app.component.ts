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
  // displayDesc = "";
  // displayTitle = "";
  showTask: any;
  newTask: any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTasksFromService();
    this.newTask = { title: "", description: "" };
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
      this.showTask = data['data'];
    });

}


create(){
  console.log('creating a new task');
  let observable = this._httpService.postTasks(this.newTask);
    observable.subscribe(data => {
  this.newTask = { title: "", description: "" };
  this.getTasksFromService();
    })
}

edit(id: string){
  console.log('editing this task');
  let observable = this._httpService.editTasks(this.showTask);
    observable.subscribe(data => {
  this.newTask = { title: "", description: "" };
  this.getTasksFromService();
    })
}


deleteTask(id: string): void { 
  console.log(`Click event is working with task id ${id} `);
  let observable = this._httpService.deleteTasksbyId(id);
    observable.subscribe(data => {
      this.tasks = data['data'];
      this.getTasksFromService();
    });

}
}

