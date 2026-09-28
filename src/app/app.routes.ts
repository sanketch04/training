import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Employee } from './components/employee/employee';
import { ApiStudent } from './components/api-student/api-student';
import { StudentDetails } from './components/student-details/student-details';
import { Admin } from './components/admin/admin';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';
import { AdminStudents } from './components/admin-students/admin-students';
import { AdminSettings } from './components/admin-settings/admin-settings';
import { authGuard } from './guards/auth-guard';
import { Login } from './components/login/login';
import { TemplateForm } from './components/template-form/template-form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { TaskList } from './components/task-list/task-list';
import { MaterialForm } from './components/material-form/material-form';
import { EmployeeCard } from './components/employee-card/employee-card';
import { EmployeeParent } from './components/employee-parent/employee-parent';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'day1', component: Employee },

  { path: 'day2', component: Home },

  { path: 'day3', component: ApiStudent },

  {
    path: 'students/:id', //parameterized route for student details dynamic id
    component: StudentDetails,
  },
  { path: 'login', component: Login },
  { path: 'day5', component: TemplateForm },
  { path: 'day5RF', component: ReactiveForm },
  { path: 'day6', component: TaskList },
  { path: 'day7', component: MaterialForm },
  { path: 'day8', component: EmployeeParent },
  {
    path: 'day9',
    component: Login,
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin/admin').then((m) => m.Admin), //lazy loading of admin component
    canActivate: [authGuard], //protecting the admin route with authGuard

    children: [
      {
        path: 'dashboard',
        component: AdminDashboard,
      },
      {
        path: 'students',
        component: AdminStudents,
      },
      {
        path: 'settings',
        component: AdminSettings,
      },
    ],
  },
];
