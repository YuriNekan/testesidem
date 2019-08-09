import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  numeroDoCep: string;
  result: any;
  bairro: any;
  complemento: any;
  localidade: any;
  uf: any;
  gia: any;

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
    this.cepService.obterEndereço(this.numeroDoCep)
    .then((response: any) => {
      this.result = response.logradouro;
      this.gia = response.gia;
      this.bairro = 'Bairro ' + response.bairro;
      this.complemento = response.complemento;
      this.uf = 'Estado ' + response.estado;
      this.localidade = 'Cidade ' + response.localidade;

    });
    console.log('Consultou o CEP');
  }
}
