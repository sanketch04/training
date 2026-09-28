import { Component } from '@angular/core';
import { EmployeeCard } from '../employee-card/employee-card';

@Component({
  selector: 'app-employee-parent',
  imports: [EmployeeCard],
  templateUrl: './employee-parent.html',
  styleUrl: './employee-parent.css',
})
export class EmployeeParent {
  employee = {
    id: 1,
    name: 'Sanket',
    role: '.NET Developer',
    department: 'IT',
  };

  deleteEmployee(id: number) {
    console.log('Employee deleted:', id);
  }
}
