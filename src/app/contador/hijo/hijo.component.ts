import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {DividirAction, MultiplicarAction} from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit{

  counter_hijo: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(
      contador => this.counter_hijo = contador
    );
  }

  multiply() {
    const action = new  MultiplicarAction(2);
    this.store.dispatch(action);
    // this.counter_hijo *= 2;
    // this.counter.emit(this.counter_hijo);
  }

  divide() {
    const action = new DividirAction(2);
    this.store.dispatch(action);
    // this.counter_hijo /= 2;
    // this.counter.emit(this.counter_hijo);
  }
  resetCounter(new_value: number) {
    this.counter_hijo = 0;
    // this.counter.emit(new_value);
  }
}
