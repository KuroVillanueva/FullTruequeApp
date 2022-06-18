import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ObjetosService } from 'src/app/services/objetos.service';
import {Storage, ref, uploadBytes} from '@angular/fire/storage';
import { Router } from '@angular/router';



@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.css']
})
export class ObjetoComponent implements OnInit {

  title='storage';

  formulario: FormGroup;

  constructor( private objetosService: ObjetosService, private router: Router ) {
    this.formulario = new FormGroup ({
      nombre: new FormControl(),
      name: new FormControl(),
      image: new FormControl(),
      description: new FormControl()
    })


  }

  ngOnInit(): void {
  }
  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.objetosService.addObjeto(this.formulario.value);
    this.router.navigate(['despliegue']);
  }
}
