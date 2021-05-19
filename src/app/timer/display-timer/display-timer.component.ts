import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TimePipe} from '../../pipes/time.pipe';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.less'],
  providers: [TimePipe]
})
export class DisplayTimerComponent implements OnInit, OnChanges {

  @Input() time;
  @Output() timerCompleted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        console.log(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        console.log(`${propName} changed from ${from} to ${to}`);
        switch (to) {
          case '0': {
            console.log('Timer Completed');
            this.timerCompleted.emit(true);
          }
        }
      }
    }
  }

}
