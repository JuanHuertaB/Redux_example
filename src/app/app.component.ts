import {Component, Output} from '@angular/core';
import { Store} from '@ngrx/store';
// import {DecrementarAction, IncrementarAction} from './contador/contador.actions';

import * as fromContador from './contador/contador.actions';
import {AppState} from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  counter: number;

  constructor(private store: Store<AppState>) {
    // this.counter = 10;
    this.store.select('contador').subscribe(counter_value => this.counter = counter_value);
  }

  increment() {
    // this.counter += 1;
    const action = new fromContador.IncrementarAction();
    this.store.dispatch(action);
  }

  decrement() {
    // this.counter > 0 ? this.counter -= 1 : this.counter = 0;
    const action = new fromContador.DecrementarAction();
    this.store.dispatch(action);
  }
  }


