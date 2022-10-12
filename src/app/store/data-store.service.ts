import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  // create a BehaviorSubject for getting value from search input in header component and pass it to main component for filtering books
  private inputDataSource$ = new BehaviorSubject(''); //keep the input value (initial, empty)
  currentInputData = this.inputDataSource$.asObservable(); // keep updated value

  constructor() {}

  // method for update the BehaviorSubject value
  newInputData(data: string) {
    this.inputDataSource$.next(data);
  }
}
