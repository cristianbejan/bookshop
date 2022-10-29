import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookStoreService } from 'src/app/store/book-store.service';
import { DataStoreService } from 'src/app/store/data-store.service';

enum FormSubmitState {
  ADD = 'Adauga cartea',
  EDIT = 'Salveaza modificarile',
}

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css'],
})
export class AddBookFormComponent implements OnInit {
  submitBtnText: string = FormSubmitState.ADD;
  // bookToBeEdited: Book;
  id: string;

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

  constructor(
    private bookStore: BookStoreService,
    private dataStoreService: DataStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataStoreService.currentBookToBeEdited.subscribe((book) => {
      // this.bookToBeEdited = book;

      if (this.id) {
        this.submitBtnText = FormSubmitState.EDIT;

        this.addBookForm.patchValue({
          title: book.title,
          author: book.author,
          publisher: book.publisher,
          releaseYear: book.releaseYear,
          pageNumber: book.pageNumber,
          isbn: book.isbn,
          description: book.description,
          price: book.price,
          imageUrl: book.imageUrl,
        });
      } else {
        this.submitBtnText = FormSubmitState.ADD;
      }
    });
  }
  onFormSubmit() {
    if (!this.id) {
      this.bookStore.addNewBook(this.addBookForm.value);
      // this._resetForm();
      this.addBookForm.reset();
    } else {
      this.bookStore.updateBook(this.addBookForm.value, this.id);
      this.router.navigate(['/admin/items']);
    }
  }

  // private _resetForm() {
  //   this.addBookForm.reset({
  //     title: '',
  //     author: '',
  //     publisher: '',
  //     releaseYear: '',
  //     pageNumber: '',
  //     isbn: '',
  //     description: '',
  //     price: '',
  //     imageUrl: '',
  //   });
  // }
}
