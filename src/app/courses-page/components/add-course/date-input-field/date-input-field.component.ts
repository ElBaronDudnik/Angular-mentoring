import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-input-field',
  templateUrl: './date-input-field.component.html',
  styleUrls: ['./date-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputFieldComponent {
  @Input() newUserForm!: FormGroup;
}
