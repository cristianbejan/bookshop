import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { Book } from 'src/app/core/interfaces/book.interface';
import { BookStoreService } from 'src/app/store/book-store.service';
import { DataStoreService } from 'src/app/store/data-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faCart = faCartShopping;
  faMagnifying = faMagnifyingGlass;

  //get value from search input
  searchQuery = new FormControl('', Validators.required);

  constructor(
    private dataStore: DataStoreService,
    private bookStore: BookStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSearch() {
    if (this.searchQuery.value) {
      // gett books filtered by title
      this.bookStore.books$.subscribe((books) => {
        let filteredBooksArr: Book[] = [];
        for (const key in books) {
          if (books[key].title.toLowerCase().includes(this.searchQuery.value)) {
            filteredBooksArr.push(books[key]);
          }
        }
        this.dataStore.newFilteredBookArr(filteredBooksArr); //pass new value to BehaviorSubject
        this.goToSearchResults();
      });
    }
  }

  goToSearchResults() {
    this.router.navigate(['search-results']);
  }
}
