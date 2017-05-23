import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentsList: string[] = ['Tick', 'Trick', 'Track', 'Max', 'Moritz'];

  constructor() { }

  ngOnInit() {
  }

  deleteStudent(index){
    this.studentsList.splice(index, 1);
  }

}
