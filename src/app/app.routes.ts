import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.routes').then((m) => m.USERS_ROUTES),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./features/posts/posts.routes').then((m) => m.POSTS_ROUTES),
  },
];
