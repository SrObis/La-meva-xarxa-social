import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registres',
  templateUrl: './registres.component.html',
  styleUrls: ['./registres.component.css']
})
export class RegistresComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  usuario: FormGroup;
  submitted = false;
  ngOnInit():void{
    this.usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required , Validators.email]]
    });
 }
 get f(){
  return this.usuario.controls;
}
enviarDatos():void{
  this.submitted = true;
  if(this.usuario.invalid){
    return;
  }
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
  
}
}