import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/interfaces/book.interface';
import { DataStoreService } from 'src/app/store/data-store.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  filteredBooks: Book[];

  constructor(private dataStore: DataStoreService) {}

  ngOnInit(): void {
    this.dataStore.currentFilteredBookArr.subscribe((books) => {
      this.filteredBooks = books;
    });
  }
}
