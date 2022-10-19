import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/core/interfaces/book.interface';
import { BookStoreService } from 'src/app/store/book-store.service';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  books: Book[];
  showGoBack: boolean = false;

  faCircleArrowLeft = faCircleArrowLeft;

  searchQuery = new FormControl('', Validators.required);

  constructor(private bookStoreService: BookStoreService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookStoreService.books$.subscribe((books) => {
      this.books = books;
    });
  }

  onSearch() {
    let filteredBooks: Book[] = [];
    for (const key in this.books) {
      if (
        this.books[key].title.toLowerCase().includes(this.searchQuery.value)
      ) {
        filteredBooks.push(this.books[key]);
      }
    }
    this.books = filteredBooks;
    this.showGoBack = true;
  }

  goBack() {
    this.getBooks();
    this.showGoBack = false;
  }
}
