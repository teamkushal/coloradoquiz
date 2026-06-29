import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'blog/key-industries',
    loadComponent: () =>
      import('./key-industries/key-industries.component').then((m) => m.KeyIndustriesComponent),
  },
  {
    path: 'news',
    loadComponent: () => import('./news/news.component').then((m) => m.NewsComponent),
  },
  {
    path: 'news/:title',
    loadComponent: () => import('./news/news.component').then((m) => m.NewsComponent),
  },
  {
    path: 'quiz',
    loadComponent: () => import('./quiz/quiz.component').then((m) => m.QuizComponent),
  },
  {
    path: 'quiz/:title',
    loadComponent: () => import('./quiz/quiz.component').then((m) => m.QuizComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'playground',
    loadComponent: () => import('./playground/playground.component').then((m) => m.PlaygroundComponent),
  },
  {
    path: 'loaderio-27f3270e87fa1a911fde7dab10c49d7c',
    loadComponent: () => import('./loader-io/loader-io.component').then((m) => m.LoaderIoComponent),
  },
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
];
