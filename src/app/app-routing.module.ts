import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
 
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post-details/:id', component: PostDetailsComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/user-details/:id', component: UserDetailsComponent },
  { path: 'users/user-details/:id/:name/:nationality/:adress/:age', component: UserDetailsComponent }, // Nueva ruta para user-details
  { path: '**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


