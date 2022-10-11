import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookStoreService } from 'src/app/store/book-store.service';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css'],
})
export class AddBookFormComponent implements OnInit {
  addBookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    publisher: new FormControl('', Validators.required),
    releaseYear: new FormControl(null, Validators.required),
    pageNumber: new FormControl(null, Validators.required),
    isbn: new FormControl(null, Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl(null, Validators.required),
    imageUrl: new FormControl('', Validators.required),
  });

  constructor(private bookStore: BookStoreService, private http: HttpClient) {}

  ngOnInit(): void {}

  onFormSubmit() {
    // this.bookStore.addNewBook(this.addBookForm.value);
    this.http
      .post(
        'https://bookshop-d4231-default-rtdb.firebaseio.com/books.json',
        this.addBookForm.value
      )
      .subscribe();

    this._resetForm();
  }

  private _resetForm() {
    this.addBookForm.reset({
      title: '',
      author: '',
      publisher: '',
      releaseYear: '',
      pageNumber: '',
      isbn: '',
      description: '',
      price: '',
      imageUrl: '',
    });
  }
}
