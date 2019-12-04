import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-date-input-field',
  templateUrl: './date-input-field.component.html',
  styleUrls: ['./date-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
