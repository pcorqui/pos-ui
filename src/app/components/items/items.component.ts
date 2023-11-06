import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StockService } from '../../services/stock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{

  products!: Product[];
  observar!: Observable<any>;

  constructor(private stockService: StockService){
    this.products = stockService.getStocks();
  }

  ngOnInit(): void {
    console.log("ejecutando on Init")
   this.stockService.getProductAPI()
    .subscribe(data => {console.log(data);
      this.products = data})
  }


  }

