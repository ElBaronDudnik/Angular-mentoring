import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authors-input-field',
  templateUrl: './authors-input-field.component.html',
  styleUrls: ['./authors-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorsInputFieldComponent implements OnInit {
  @Input() newUserForm!: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
