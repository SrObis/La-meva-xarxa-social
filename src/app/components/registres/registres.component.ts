import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registres',
  templateUrl: './registres.component.html',
  styleUrls: ['./registres.component.css']
})

export class RegistresComponent {

    registre = new FormGroup({
      nom: new FormControl('', Validators.required),
      cognom: new FormControl('', Validators.required),
      edat: new FormControl('', Validators.required),
      foto: new FormControl('', Validators.required),
      desc: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cont: new FormControl('', Validators.required),
    });

    sweetAlert() {
      Swal.fire({
        icon: 'success',
        text: 'Usuari registrat!',
      })
    }

    push() {
      //push array
    }
}
