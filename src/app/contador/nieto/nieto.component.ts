import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ResetAction} from '../contador.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  counter_nieto: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('contador').subscribe(contador => this.counter_nieto = contador);
  }

  reset() {
    const action = new ResetAction();
    this.store.dispatch(action);
    // this.counter_nieto = 0;
    // this.new_counter.emit(this.counter_nieto);
  }
}
