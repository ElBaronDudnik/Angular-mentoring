import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-duration-input-field',
  templateUrl: './duration-input-field.component.html',
  styleUrls: ['./duration-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationInputFieldComponent implements OnInit {
  duration = 0;
  constructor() { }

  ngOnInit() {
  }

}
