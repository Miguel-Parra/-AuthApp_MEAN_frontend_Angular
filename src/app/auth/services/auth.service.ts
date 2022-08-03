import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario }
  }

  constructor(
    private _httpClient: HttpClient
  ) { }

  registro(name: string, email: string, password: string) {
    const url = this.baseUrl + '/auth/new';
    const body = {
      name,
      email,
      password
    }
    return this._httpClient.post<AuthResponse>(url, body)
      .pipe(
        tap(datos => {
          if (datos.ok) {
            localStorage.setItem('token', datos.token!);
          }
        }),
        map(resp => resp.ok),
        catchError(error => {
          return of(error.error.msg)

        })
      )

  }

  login(email: string, password: string) {
    const url = this.baseUrl + '/auth';
    const body = {
      email,
      password
    }
    return this._httpClient.post<AuthResponse>(url, body)
      .pipe(
        tap(datos => {
          if (datos.ok) {
            localStorage.setItem('token', datos.token!);
          }
        }),
        map(resp => resp.ok),
        catchError(error => of(error.error.msg))
      )
  }

  validarToken(): Observable<boolean> {
    const url = this.baseUrl + '/auth/renew';
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')
    console.log(headers)
    return this._httpClient.get(url, { headers: headers })
      .pipe(
        map((res: any) => {
          localStorage.setItem('token', res.token!);
          this._usuario = {
            name: res.name!,
            uid: res.uidUsuario!,
            email: res.email!
          }
          console.log(this.usuario);

          return res.ok;

        }),
        catchError(error => {
          return of(false)
        })

      )
  }


  logout() {
    localStorage.removeItem('token');

  }
}
