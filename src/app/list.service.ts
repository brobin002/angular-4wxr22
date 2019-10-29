import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ListService {


  getRestaurant() {
    return this.http.get('/assets/shipping.json');
  }

  constructor(private http: HttpClient) { }

}