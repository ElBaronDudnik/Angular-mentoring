import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-duration-input-field',
  templateUrl: './duration-input-field.component.html',
  styleUrls: ['./duration-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationInputFieldComponent {
  public duration!: number;
  @Input() newUserForm!: FormGroup;
}
