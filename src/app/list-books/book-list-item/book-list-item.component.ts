import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/Book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute,
              private bookService: BooksService,
              private router: Router) { }

  ngOnInit() {
    this.book = new Book('','');
    const id = this.route.snapshot.params['id'];
    this.bookService.getSingleBook(+id).then(
      (book: Book) => {
        this.book = book;
      }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
