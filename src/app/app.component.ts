import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  in_index: any;
  edit = false;
  tasks: any[] = [];
  task: string = "Welcome";
  addtask() {
    if (this.task.length == 0) {
      alert("enter a Task");
    }
    else {
      if (this.tasks.indexOf(this.task) !== -1) {

        alert(this.task + " Aleardy Exists");
        this.task = '';

      }
      else {
        this.tasks.push(this.task);
        this.task = "";
      }
    }
  }
  onEdit(tas: string) {
    alert(tas);
    this.tasks[this.in_index] = tas;
  }
  onDel(tas: string) {
    this.tasks.splice(this.tasks.indexOf(tas), 1);
  }
  beforeEdit(tas: string) {

  }
}
/*  interface IForm {   name: string, mobile_no: number,   password: string,  address: object   }   */