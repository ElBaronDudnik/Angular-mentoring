import { Component, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  public duration!: number;

  @Input() control!: FormControl;
  @Input() durationValue!: number;

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(val: number) {
    this.duration = val;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  changeDuration(val: string): void {
    this.writeValue(+val);
    this.onChanged(val);
  }
}
