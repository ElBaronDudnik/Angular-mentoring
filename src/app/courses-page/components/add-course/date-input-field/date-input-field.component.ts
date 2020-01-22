import { Component, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface IErrors {
  required: boolean;
  validateDate: boolean;
}

@Component({
  selector: 'app-date-input-field',
  templateUrl: './date-input-field.component.html',
  styleUrls: ['./date-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputFieldComponent),
      multi: true
    }
  ]
})
export class DateInputFieldComponent implements ControlValueAccessor {
  public date!: any;
  @Input() errors!: IErrors;
  @Input() used!: boolean;
  @Input() dateValue!: string;
  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(val: any) {
    this.date = val;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  changeDate(val: string): void {
    this.writeValue(val);
    this.onChanged(val);
  }
}
