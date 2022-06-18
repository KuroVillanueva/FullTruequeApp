import { Injectable } from '@angular/core';
import {Firestore, collection, addDoc, collectionData} from '@angular/fire/firestore'
import { Objeto } from '../interfaces/objeto';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObjetosService {

  constructor(private firestore: Firestore) {}

  addObjeto(objeto: Objeto){
    const objetoRef = collection(this.firestore,'objetos');
    return addDoc(objetoRef, objeto);
  }

  getObjetos(): Observable <Objeto[]>{
    const objetoRef = collection(this.firestore,'objetos');
    return collectionData(objetoRef,{idField:'id'}) as Observable<Objeto[]>;

  }


}
