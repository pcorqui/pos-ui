import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-component',
  templateUrl: './img-component.component.html',
  styleUrls: ['./img-component.component.css']
})
export class ImgComponentComponent implements OnInit{

  //para indicar la entrada de un componente
 @Input() img: string = 'valor init';

  constructor(){

  }

  ngOnInit(): void{

  }

}
