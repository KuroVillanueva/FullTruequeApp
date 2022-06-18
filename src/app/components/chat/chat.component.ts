import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  mostrarChat = false;
  usuarioLogeado: any;
  nuevoMensaje: string = "";
  mensajes: any = [



  ]

  constructor(private authService: AuthService) {}


  ngOnInit(){
    this.authService.getUserLogged().subscribe(usuario=>{
      this.usuarioLogeado=usuario;
    });
}
//Funcion para obtener el mensaje por uid de firebase
  enviarMensaje(){
    if(this.nuevoMensaje=="")return;
    console.log(this.nuevoMensaje);
    let mensaje={
      emisor:this.usuarioLogeado.uid,
      texto:this.nuevoMensaje
    }
    this.mensajes.push(mensaje);

    this.nuevoMensaje="";

    setTimeout(() =>{
      this.scrollToTheLastElementByClassName();
    },15);
   }

//funcion para el despliegue de mensajes
   scrollToTheLastElementByClassName(){
    let elements = document.getElementsByClassName('msj');
    let ultimo: any = elements[(elements.length - 1)];
    let toppos = ultimo.offsetTop;
   }

}
