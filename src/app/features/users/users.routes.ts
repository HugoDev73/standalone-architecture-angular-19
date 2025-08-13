import { Routes } from '@angular/router';
import { UsersCreateUpdateComponent } from './pages/users-create-update/users-create-update.component';
import { UsersDetailComponent } from './pages/users-detail/users-detail.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    component: UsersListComponent,
    title: 'Users',
  },
  {
    path: 'detail/:idUser',
    component: UsersDetailComponent,
    title: 'User Detail',
  },
  {
    path: 'new',
    component: UsersCreateUpdateComponent,
    title: 'New User',
  },
];
