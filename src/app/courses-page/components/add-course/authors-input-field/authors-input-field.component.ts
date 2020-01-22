import { Component, ChangeDetectionStrategy, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IAuthors } from '../../../course.interface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface IErrors {
  required: boolean;
}

@Component({
  selector: 'app-authors-input-field',
  templateUrl: './authors-input-field.component.html',
  styleUrls: ['./authors-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsInputFieldComponent),
      multi: true
    }
  ]
})
export class AuthorsInputFieldComponent implements ControlValueAccessor, OnInit {
  public authors!: any;
  public listOpened = false;
  public selectedAuthors: string[] = [];
  public authorNamesCopy!: string[];
  public textIndent = '7px';
  public faTimes = faTimes;

  @Input() errors!: IErrors;
  @Input() used!: boolean;
  @Input() authorNames!: string[];
  @Input() authorsValue!: IAuthors[];

  onChanged: any = () => {};
  onTouched: any = () => {};

  ngOnInit() {
    if (this.authorsValue) {
      this.authorsValue.forEach(author => this.addAuthor(`${author.lastName} ${author.name}`));
    }
  }

  writeValue(val: any) {
    this.authors = val;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  addAuthor(author: string) {
    this.selectedAuthors.push(author);
    this.writeValue(this.selectedAuthors);
    this.onChanged(this.selectedAuthors);
    this.authorNames = this.authorNames.filter(item => item !== author);
    this.listOpened = false;
    this.textIndent = `${parseInt(this.textIndent, 10) + author.length * 8 + 7}px`;
  }

  onClick(e: Event) {
    this.authorNamesCopy = this.authorNames.slice();
    this.listOpened = !this.listOpened;
  }

  removeAuthor(author: string) {
    console.log(author);
    this.listOpened = !this.listOpened;
    this.selectedAuthors = this.selectedAuthors.filter(item => item !== author);
    this.writeValue(this.selectedAuthors);
    this.onChanged(this.selectedAuthors);
    this.textIndent = `${parseInt(this.textIndent, 10) - author.length * 8 - 7}px`;
  }

  onSearch(value: string) {
    this.listOpened = true;
    this.authorNamesCopy = this.authorNames.filter(item => item.toLowerCase().includes(value.toLowerCase()));
  }
}
