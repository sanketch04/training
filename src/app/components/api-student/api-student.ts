import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { StudentService } from '../../services/student';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-student',
  imports: [NgFor, RouterLink],
  templateUrl: './api-student.html',
  styleUrl: './api-student.css',
})
export class ApiStudent {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe({
      next: (data: any[]) => {
        console.log('API RESPONSE:', data);
        this.students = data;
      },

      error: (error: any) => {
        console.error('API ERROR:', error);
      },
    });
  }
}
