import { Component, OnInit } from '@angular/core';
import {RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    email:'',
    password:''
  }
  constructor (private authService: AuthService, private router: Router, alertCtrl: AlertController) {
  }
//funcion para ingresar con correo electrónico
//login/register
  Ingresar(){
    console.log(this.usuario);
    const{email,password} = this.usuario;
    this.authService.login(email,password).then(res => {
      this.router.navigate(['despliegue']);;
      })
  }
//
  IngresarConGoogle(){
    const{email,password} = this.usuario;
    this.authService.loginwithGoogle(email,password).then(res => {
      this.router.navigate(['despliegue']);;

      })
  }
//funcion para obtener datos de ingreso
  obtenerUsuarioLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    });
  }

//funcion para salir
  logout(){
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
