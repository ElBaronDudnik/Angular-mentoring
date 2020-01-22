import { Component, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface IErrors {
  required: boolean;
  validateDuration: boolean;
}

@Component({
  selector: 'app-duration-input-field',
  templateUrl: './duration-input-field.component.html',
  styleUrls: ['./duration-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputFieldComponent),
      multi: true
    }
  ]
})
export class DurationInputFieldComponent implements ControlValueAccessor {
  @Input() errors!: IErrors;
  @Input() used!: boolean;
  @Input() durationValue!: number;
  public duration!: number;

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(val: any) {
    this.duration = val;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  changeDuration(val: string): void {
    this.writeValue(val);
    this.onChanged(val);
  }
}
