import { Component, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

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
  public date!: string;

  @Input() control!: FormControl;
  @Input() dateValue!: string;

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(val: string) {
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
