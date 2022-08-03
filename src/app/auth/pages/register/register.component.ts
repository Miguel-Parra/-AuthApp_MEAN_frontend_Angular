import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ValidatorService } from '../../Validator/validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {
  miFormRegistro: FormGroup = this._fb.group({
    nombre: ['Test1', [Validators.required, Validators.minLength(3)]],
    email: ['test1@test.com', [Validators.required, Validators.pattern(this._valService.emailPattern)]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]

  })

  constructor(
    private _fb: FormBuilder,
    private _valService: ValidatorService,
    private _router: Router,
    private _authService: AuthService
  ) { }

  registrar() {
    const {nombre, email, password} = this.miFormRegistro.value;
    this._authService.registro(nombre, email, password)
    .subscribe({
      next: respServicio => {
        if(!respServicio){
          this._router.navigateByUrl('/dashboard')
        }else{
          Swal.fire('Error', respServicio, 'error')
        }
      }
    })
  }

}
