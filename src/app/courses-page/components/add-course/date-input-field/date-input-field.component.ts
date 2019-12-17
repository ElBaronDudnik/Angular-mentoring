import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-input-field',
  templateUrl: './date-input-field.component.html',
  styleUrls: ['./date-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputFieldComponent implements OnInit {
  @Input() newUserForm!: FormGroup;
  constructor() { }

  ngOnInit() {
  }


}
