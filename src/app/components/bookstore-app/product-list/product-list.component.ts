import { BookService } from '../../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: any;
  bookService : BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
   }

  ngOnInit(): void {
    this.books = this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    })
  }

}
