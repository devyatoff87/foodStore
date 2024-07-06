import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Food } from '../../models/Food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private http = inject(HttpClient)

  getAll() {
    return this.http.get<Food[]>('../../../assets/food_store.json')
  }
}
