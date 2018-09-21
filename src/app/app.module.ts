import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material.module';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

 import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

import { AuthService } from './services/auth.service';

 import { appRoutes } from '../app.routes';

 @NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuizComponent,
    QuestionComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyB8IrXTDFS5HAW-BLzes51IpTBpKcud1AA',
      authDomain: 'quiz-3c990.firebaseapp.com',
      databaseURL: 'https://quiz-3c990.firebaseio.com',
      projectId: 'quiz-3c990',
      storageBucket: 'quiz-3c990.appspot.com',
      messagingSenderId: '882298001134'
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
