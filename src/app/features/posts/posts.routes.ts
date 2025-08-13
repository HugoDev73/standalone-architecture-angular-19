import { Routes } from "@angular/router";
import { PostsListComponent } from "./pages/posts-list/posts-list.component";
import { PostsDetailComponent } from "./pages/posts-detail/posts-detail.component";

export const POSTS_ROUTES: Routes = [
  {
    path: '',
    component: PostsListComponent,
    title: 'Posts list',
  },
  {
    path: 'detail/:idPost',
    component: PostsDetailComponent,
    title: 'Post detail',
  },
];