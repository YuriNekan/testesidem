import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }


  obterEndereço(cep: number) {
    const url = 'https://viacep.com.br/ws/' + cep + '/json/';

    return this.http.get(url).toPromise();
  }

}
