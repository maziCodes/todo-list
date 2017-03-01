import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { TodoListComponent } from './todo-list/todo-list.component';
// import { TodoListService } from './todo-list/todo-list.service';
// import { UsersComponent } from './users/users.component'


@NgModule({
  declarations: [
    AppComponent,
    // TodoListComponent,
    // UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
