import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  book!: Book;

  categoryColor: string = "blue";
  cardHeight: string = "550px";
  priceFontSize: string = "20px"; 

  constructor() { }

  ngOnInit(): void {
  }

}
