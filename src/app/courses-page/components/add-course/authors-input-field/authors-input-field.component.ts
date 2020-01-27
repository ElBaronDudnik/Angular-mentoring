import { Component, ChangeDetectionStrategy, forwardRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AppState } from 'app/store/app.reducer';
import { Store } from '@ngrx/store';
import { selectCoursesList } from 'app/store/coursesList/course-list.selector';
import { Subscription } from 'rxjs';

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
export class AuthorsInputFieldComponent implements ControlValueAccessor, OnInit, OnDestroy {
  public authors!: any;
  public listOpened = false;
  public selectedAuthors: string[] = [];
  public authorNamesCopy!: string[];
  public faTimes = faTimes;
  private subscription!: Subscription;

  @Input() control!: FormControl;
  @Input() availableAuthorNames!: string[];

  onChanged: any = () => {};
  onTouched: any = () => {};

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select(selectCoursesList).subscribe(courses => {
      if (courses[0].authors && courses.length === 1) {
        courses[0].authors
          .forEach(author => this.addAuthor(`${author.lastName} ${author.name}`));
      }});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  addAuthor(authorName: string) {
    this.selectedAuthors.push(authorName);
    this.availableAuthorNames = this.availableAuthorNames
      .filter(item => item !== authorName);
    this.listOpened = false;

    this.writeValue(this.selectedAuthors);
    this.onChanged(this.selectedAuthors);
  }

  onClick() {
    this.authorNamesCopy = this.availableAuthorNames.slice();
    this.listOpened = !this.listOpened;
  }

  removeAuthor(author: string) {
    this.listOpened = false;
    this.selectedAuthors = this.selectedAuthors.filter(item => item !== author);

    this.writeValue(this.selectedAuthors);
    this.onChanged(this.selectedAuthors);
  }

  onSearch(searchQuery: string) {
    this.listOpened = true;
    this.authorNamesCopy = this.availableAuthorNames
    .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
  }
}
