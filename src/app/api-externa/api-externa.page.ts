import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  result: any;
  constructor() { }

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
}
