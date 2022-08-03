import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ValidatorService } from '../../Validator/validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormLogin: FormGroup = this._fb.group({
    email: ['test1@test.com', [Validators.required, Validators.pattern(this._valService.emailPattern)]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private _fb: FormBuilder,
    private _valService: ValidatorService,
    private _router: Router,
    private _authService: AuthService
  ) {
  }

  login() {
    const { email, password } = this.miFormLogin.value
    this._authService.login(email, password)
      .subscribe({
        next: (ok) => {
          if(ok === true){
           
            this._router.navigateByUrl('/dashboard')
          } else {
            Swal.fire('Error', ok, 'error')
          }
         }
      })
    // this._router.navigateByUrl('/dashboard')
  }


}
