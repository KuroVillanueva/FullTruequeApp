import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { DespliegueComponent } from './components/despliegue/despliegue.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ObjetoListComponent } from './components/objeto-list/objeto-list.component';
import { ObjetoComponent } from './components/objeto/objeto.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    pathMatch:'full',
    path:"",
     redirectTo:'home'
   },

  {
    path:"login",
    component:LoginComponent
   },
   {
    path:"register",
     component:RegisterComponent
   },
   {
    path:"home",
     component:HomeComponent
   },
   {
    path:"chat",
     component:ChatComponent
   },
   {
    path:"objeto",
     component:ObjetoComponent
   },
   {
    path:"despliegue",
     component:DespliegueComponent
   },
   {
    path:"objetolist",
     component:ObjetoListComponent
   },
   {
    path:"**",
     component: PageNotFoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
