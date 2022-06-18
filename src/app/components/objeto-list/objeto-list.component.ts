import { Component, OnInit } from '@angular/core';
import { Objeto } from 'src/app/interfaces/objeto';
import { ObjetosService } from 'src/app/services/objetos.service';

@Component({
  selector: 'app-objeto-list',
  templateUrl: './objeto-list.component.html',
  styleUrls: ['./objeto-list.component.css']
})
export class ObjetoListComponent implements OnInit {

  objetos: Objeto[];

  constructor( private objetosService: ObjetosService) {

    this.objetos = [{
      nombre: '',
      name: '',
      description: '',
      image: ''
    }];
  }

  ngOnInit(): void {
    this.objetosService.getObjetos().subscribe(objetos => {
      this.objetos = objetos;
    })
  }

}
