import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private afauth: AngularFireAuth, private router: Router) { }

//servicio para registrar correo y contraseña
  async register(email:string,password:string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword (email,password);
    } catch (err) {
      console.log("error en login", err);
      return null;
    }
  }


//servicio para ingresar con correo y contraseña registrada anteriormente
  async login(email:string,password:string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email,password);

    } catch (err) {
      console.log("error en login", err);
      return null;
    }
  }

//servicio para ingresar con Google
  async loginwithGoogle(email:string,password:string) {
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log("error en login con google", err);
      return null;
    }
  }
//servicio para obtener el usuario que ingresa a la app
  getUserLogged(){
    return this.afauth.authState;

   }
//servicio para salir de la cuenta
    logout(){
    this.afauth.signOut().then(res => {
      this.router.navigate(['home']);;

      });
   }
}
