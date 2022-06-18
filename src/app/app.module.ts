import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule, FirebaseApp } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChatComponent } from './components/chat/chat.component';
import { ObjetoComponent } from './components/objeto/objeto.component';
import { provideFirestore, getFirestore, FirestoreModule } from '@angular/fire/firestore';
import { FirebaseAppModule, FirebaseApps, provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from '@angular/fire/app';
import { Firestore } from 'firebase/firestore';
import { DespliegueComponent } from './components/despliegue/despliegue.component';
import { ObjetoListComponent } from './components/objeto-list/objeto-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ChatComponent,
    ObjetoComponent,
    DespliegueComponent,
    ObjetoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FirestoreModule,
    FirebaseAppModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
