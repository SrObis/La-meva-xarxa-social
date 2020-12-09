import { Component, OnInit } from '@angular/core';
import { LlistaUsuari } from 'src/app/components/model/lista-usuarios.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuaris: LlistaUsuari[] = [];

  constructor() { }

  ngOnInit(): void {
    // Usuaris
    this.usuaris.push(new LlistaUsuari('Peter','Griffin', '48', 'Persona Obesa' ,'assets/imagen/persona6.jpg'));
    this.usuaris.push(new LlistaUsuari('Walter','White', '45', 'Vende droga' ,'assets/imagen/persona1.jpg'));
    this.usuaris.push(new LlistaUsuari('Elvis','Ionario', '80', 'Adicto a los mimitos' ,'assets/imagen/persona3.jpg'));
    this.usuaris.push(new LlistaUsuari('Rafael','Mora', '25', 'Musculitos friki' ,'assets/imagen/persona4.jpg'));
    this.usuaris.push(new LlistaUsuari('Jugadores','de futbol', '32', 'Amantes' ,'assets/imagen/persona5.jpg'));
    this.usuaris.push(new LlistaUsuari('Slumdog','Millionaire', '23', 'Rico de nacimiento' ,'assets/imagen/persona2.jpg'));
  }

  // Boto eliminar
  eliminar(llista_usuari_model) {
    // SweetAlert2
    Swal.fire({
      title: 'Estas seguro?',
      text: "No se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminacio de l'usuari
        this.usuaris.splice(llista_usuari_model,1);
        Swal.fire(
          'Eliminado!',
          'Ha sido eliminado.',
          'success'
        )
      } else {
        Swal.fire(
          'Cancelado',
          'No se ha eliminado',
          'error'
        )
      }
    })

  }



}
