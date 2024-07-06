import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private http = inject(HttpClient)

  getAll() {
    return this.http.get('../../../assets/food_store.json')
  }
}
