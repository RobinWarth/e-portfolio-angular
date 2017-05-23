import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { ProfComponent } from './prof/prof.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {path: 'student', component: StudentComponent},
  {path: 'prof', component: ProfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
