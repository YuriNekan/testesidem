import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  obterUsuarioPor(id: number) {
    let url = 'http://localhost:8100/home';

    return this.http.get(url).toPromise();
  }
}
