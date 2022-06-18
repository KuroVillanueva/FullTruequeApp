import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario = {
    email:'',
    password:'',
    nombre:'',
    telefono:''
  }

  constructor (private authService: AuthService, private router: Router) {
  }
//funcion para registrar con correo electrónico
  registrarse(){
    console.log(this.usuario);
    const{email,password} = this.usuario;
    this.authService.register(email,password).then(res =>
       {
        this.router.navigate(['objetos']);;
      })
  }

//funcion para obtener datos de ingreso
  obtenerUsuarioLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    });
  }


  ngOnInit(): void {
  }

}
