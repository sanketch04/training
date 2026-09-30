import { Component, ChangeDetectorRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css'
})
export class StudentDetails {

  student: any = null;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    console.log('ID:', id);

    if (id) {

      this.studentService.getStudentById(Number(id)).subscribe({

        next: (data: any) => {

          console.log('API RESPONSE:', data);

          this.student = data;

          // Force Angular to update the template
          this.cdr.detectChanges();

          console.log('STUDENT:', this.student);
        },

        error: (error: any) => {
          console.error('API ERROR:', error);
        }

      });

    }
  }
}