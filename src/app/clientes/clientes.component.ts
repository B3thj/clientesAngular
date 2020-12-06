import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente' ;
import {ClienteService} from './cliente.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  delete(cliente: Cliente):void{

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text:  `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe(
          response => {

            this.clientes = this.clientes.filter(cli => cli !== cliente)

            swalWithBootstrapButtons.fire(
              'Cliente Eliminado',
              `Cliente ${cliente.nombre} eliminado con éxito`,
              'success'
            )
          }
        )

      } /*else if (
        Read more about handling dismissals below
        result.dismiss === Swal.DismissReason.cancel
      )*/ {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })


}
}
