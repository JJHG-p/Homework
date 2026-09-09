import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentList } from './student-list/student-list';
import { LinkedList } from './linked-list';

@Component({
  selector: 'app-root',
  imports: [StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('asistencia-app');

  studentList = new LinkedList();
  students = signal<any[]>([]);

  newName: string = '';
  newAge: number = 0;
  newCode: string = '';

  captureName(e: any) {
    this.newName = e.target.value;
  }

  captureAge(e: any) {
    this.newAge = e.target.value;
  }

  captureCode(e: any) {
    this.newCode = e.target.value;
  }

  addStudent() {
    if (!this.newName || !this.newCode) return;

    const student = { name: this.newName, age: this.newAge, code: this.newCode};
    this.studentList.append(student);
    this.refreshStudents();

    this.newName = '';
    this.newAge = 0;
    this.newCode = '';
  }

  removeStudent(student: any) {
    this.studentList.remove(student);
    this.refreshStudents();
  }

  refreshStudents() {
    let current = this.studentList.head;
    const result: any[] = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    this.students.set(result);
  }
}
