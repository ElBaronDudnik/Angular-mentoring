import { Component, forwardRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AppState } from 'app/store/app.reducer';
import { Store } from '@ngrx/store';
import { selectCoursesList } from 'app/store/coursesList/course-list.selector';
import { Subscription } from 'rxjs';
import { IAuthor } from '../../../course.interface';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-authors-input-field',
  templateUrl: './authors-input-field.component.html',
  styleUrls: ['./authors-input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsInputFieldComponent),
      multi: true
    }
  ]
})
export class AuthorsInputFieldComponent implements ControlValueAccessor, OnInit, OnDestroy {
  public authors!: IAuthor[];
  public listOpened = false;
  public selectedAuthors: IAuthor[] = [];
  public authorNamesCopy!: IAuthor[];
  public faTimes = faTimes;
  private subscription!: Subscription;

  @Input() isUpdating!: boolean;
  @Input() control!: FormControl;
  @Input() availableAuthorNames!: IAuthor[];

  onChanged: any = () => {};
  onTouched: any = () => {};

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    if (this.isUpdating) {
        this.subscription = this.store.select(selectCoursesList)
          .pipe(
            filter(courses => courses.length === 1),
          ).subscribe(courses => courses[0].authors && courses[0].authors.forEach(author => this.addAuthor(author)));
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
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

  addAuthor(author: IAuthor) {
    this.selectedAuthors.push(author);
    this.availableAuthorNames = this.availableAuthorNames
      .filter(availableAuthor => availableAuthor.name !== author.name);
    this.listOpened = false;

    this.writeValue(this.selectedAuthors);
    this.onChanged(this.selectedAuthors);
  }

  onClick() {
    this.authorNamesCopy = this.availableAuthorNames.slice();
    this.listOpened = !this.listOpened;
  }

  removeAuthor(author: IAuthor) {
    this.listOpened = false;
    this.selectedAuthors = this.selectedAuthors
      .filter(item => item.name !== author.name);
    this.availableAuthorNames.push(author);

    this.writeValue(this.selectedAuthors);
    this.onChanged(this.selectedAuthors);
  }

  onSearch(searchQuery: string) {
    this.listOpened = true;
    this.authorNamesCopy = this.availableAuthorNames
    .filter((item: IAuthor) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }
}
