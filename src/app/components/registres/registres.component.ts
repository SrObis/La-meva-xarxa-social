import { Component, OnInit, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// npm install sweetalert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registres',
  templateUrl: './registres.component.html',
  styleUrls: ['./registres.component.css']
})
export class RegistresComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  usuario: FormGroup;
  submitted = false; 
  

  ngOnInit(): void {

    // Valores que se pasan para validar
    // El required es para ver si no esta vacio
    // El minLenght() es para que tenga un minimo de caracteres
    // El email para comprobar que es tipo email
    this.usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      foto: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(4)]],
      correo: ['', [Validators.required, Validators.email]],
      contrasenya: ['', Validators.required],
      contrasenya2: ['', Validators.required],      
    });
  }

  get f(){
    return this.usuario.controls;
  }

  enviarDatos(){
    this.submitted = true;

    if(this.usuario.invalid){
      return;
    }

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Usuari registrat correctament',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
