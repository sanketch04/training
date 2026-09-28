import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
}

@Component({
  selector: 'app-employee-card',
  imports: [],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.css',
})
export class EmployeeCard {
  @Input() employee!: Employee;

  @Output() deleteEmployee = new EventEmitter<number>();

  delete() {
    this.deleteEmployee.emit(this.employee.id);
  }
}
