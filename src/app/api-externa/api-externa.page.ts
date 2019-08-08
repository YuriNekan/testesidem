import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  result: any;
  bairro: any;
  constructor(private usuarioService: UsuarioService, private cepService: CepService) { }

  ngOnInit() {
  }

  get() {
    console.log('get');
  }

  post() {
    console.log('post');

  }

  put() {
    console.log('put');

  }

  delete() {
    console.log('delete');

  }
  cep() {
    this.cepService.obterEndereço(26112250)
    .then((response: any) => {
      this.result = response.logradouro;
      this.bairro = 'Bairro:' + response.bairro;
      this.bairro = `Bairro: {{$response.bairro}}`;
    });
  }
}
