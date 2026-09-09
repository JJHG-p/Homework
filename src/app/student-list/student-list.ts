import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  @Input() students: any[] = [];
  @Output() removeStudent = new EventEmitter<any>();

  onDelete(student: any){
    this.removeStudent.emit(student);
  }
}
