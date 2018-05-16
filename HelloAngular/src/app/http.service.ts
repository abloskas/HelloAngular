import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
      this.getTasks();
  }

  
getTasks(){
  return this._http.get('/tasks');
}

getTasksbyId(id: string){
  return this._http.get(`/tasks/${id}`);
}


postTasks(newTask){
  return this._http.post('/tasks', newTask);
}

editTasks(editTask){
  return this._http.put(`/tasks/${editTask._id}`, editTask);
}

deleteTasksbyId(id: string){
  return this._http.post(`/tasks/delete/${id}`, {});
}
}

