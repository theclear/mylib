import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../Models/Book.model';
import { Subscription } from 'rxjs/Subscription';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit, OnDestroy{

  books: Book[];
  bookSubscription: Subscription;

  constructor(private bookService: BooksService, private router: Router) {}

  ngOnInit() {
    this.bookSubscription = this.bookService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.bookService.getBooks();
    this.bookService.emitBooks();
  }

  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book) {
    this.bookService.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }

}
