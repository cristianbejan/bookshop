import { Component, OnInit } from '@angular/core';
import {
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faCart = faCartShopping;
  faMagnifying = faMagnifyingGlass;

  constructor() {}

  ngOnInit(): void {}
}
