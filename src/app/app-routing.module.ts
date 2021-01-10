import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    'path': 'quiz',
    'component': QuizComponent
  },
  {
    'path': 'quiz/:title',
    'component': QuizComponent
  },
  {
    'path': 'home',
    'component': HomeComponent
  },
  {
    'path': '',
    'component': HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
