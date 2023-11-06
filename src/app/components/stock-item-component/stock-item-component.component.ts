import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-stock-item-component',
  templateUrl: './stock-item-component.component.html',
  styleUrls: ['./stock-item-component.component.css']
})
export class StockItemComponentComponent implements OnInit{

  public name!: string;
  public code!: string;
  public price!: number;
  public previousPrice!: number;
  public img!: string;
  public title!: string;

  @Input() Product!: Product;

  constructor(){

  }

  ngOnInit(): void {
      this.name = this.Product.name;
      this.code = this.Product.id;
      this.price = this.Product.price;
      this.img = this.Product.image;
      this.title = this.Product.title;
      //this.previousPrice = this.Product.image;
  }
}
