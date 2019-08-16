import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { BookListItemComponent } from './list-books/book-list-item/book-list-item.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookFormComponent } from './list-books/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { BooksService } from './services/books.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guards.service';

const appRoutes: Routes= [
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/signin', component: SigninComponent},
  { path: 'books', canActivate: [AuthGuardService], component: ListBooksComponent},
  { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent},
  { path: 'books/view/:id', canActivate: [AuthGuardService], component: BookListItemComponent},
  { path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: '**', redirectTo: 'books'}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ListBooksComponent,
    BookListItemComponent,
    SignupComponent,
    SigninComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    BooksService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
