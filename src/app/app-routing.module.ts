import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KeyIndustriesComponent } from './key-industries/key-industries.component';
import { LoaderIoComponent } from './loader-io/loader-io.component';
import { NewsComponent } from './news/news.component';
import { PlaygroundComponent } from './playground/playground.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path: 'blog/key-industries',
    component: KeyIndustriesComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news/:title',
    component: NewsComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'quiz/:title',
    component: QuizComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'playground',
    component: PlaygroundComponent
  },
  {
    path: 'loaderio-27f3270e87fa1a911fde7dab10c49d7c',
    component: LoaderIoComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
