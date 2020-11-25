import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente' ;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id:1, nombre:'Beth', apellido:'Hdez', email:'test@tes.com', createAt:'2019-12-03'},
    {id:2, nombre:'Adri', apellido:'Hdez', email:'test@tes.com', createAt:'2018-12-03'},
    {id:3, nombre:'Roci', apellido:'Hdez', email:'test@tes.com', createAt:'2017-12-03'},
    {id:4, nombre:'Ange', apellido:'Hdez', email:'test@tes.com', createAt:'2016-12-03'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
