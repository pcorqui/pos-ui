import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private stock!: Product[];

  constructor(private http: HttpClient) { 
    this.stock = [{
      id: '1',
      name: 'product1',
      price: 0.0,
      image: "random",
      title: "sin title"
  },
  {
    id: '2',
    name: 'product1',
    price: 0.0,
    image: "random",
    title: "sin title"
},{
  id: '3',
  name: 'product1',
  price: 0.0,
  image: "random",
  title: "sin title"
},{
  id: '4',
  name: 'product1',
  price: 0.0,
  image: "random",
      title: "sin title"
},{
  id: '5',
  name: 'product1',
  price: 0.0,
  image: "random",
  title: "sin title"
}];
  }

  getProductAPI():Observable<any>{
    return this.http.get('https://fakestoreapi.com/products');
  }

  getStocks(): Product[]{
    return this.stock;
  }

  createStock(product: Product){
    let foundStock = this.stock.find(each => each.id === product.id);
    if(foundStock){
      return false;
    }
    this.stock.push(product);
    return true;

  }

  //aun no implementado
  toggleFavorite(stock: Product){
    let foundStock = this.stock.find(each => each.id === stock.id);
    //foundStock.favorite = !foundStock.favorite;
  }
}
