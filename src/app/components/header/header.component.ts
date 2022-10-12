import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
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
  inputValue = new FormControl('');

  constructor(private dataStore: DataStoreService) {}

  ngOnInit(): void {}

  // on submit, pass the value from search input to BehaviorSubject (update BS value)
  onSearch() {
    this.dataStore.newInputData(this.inputValue.value.toLowerCase());
  }
}
