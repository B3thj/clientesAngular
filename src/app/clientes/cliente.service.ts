import { Injectable } from '@angular/core';
import {CLIENTES} from './clientes.json';
import {Cliente} from './cliente' ;
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs';

@Injectable()
export class ClienteService {

  constructor() { }
  getClientes (): Observable<Cliente[]>{
    return of(CLIENTES);
  }
}
