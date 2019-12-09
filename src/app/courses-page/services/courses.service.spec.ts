import { getTestBed, TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { coursesMock } from '../../courses-page/courses.mock';

describe('CoursesService', () => {
  let injector: TestBed;
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService],
    });

    injector = getTestBed();
    service = injector.get(CoursesService);
  });

  it('should return courses list', () => {
    const list = service.coursesList;
    expect(list).toBe(coursesMock);
  });

  it('should create course', () => {
    const courses = service.createCourse({
      id: 10,
      title: 'Angular Course',
      creationDate: new Date(12, 11, 2019),
      duration: 12,
      description: 'Angular course description'
    });
    expect(service.coursesList).toBe(courses);
  });

  it('should return course by its id', () => {
    const course = service.getCourseById(1);
    expect(course).toBe(coursesMock[0]);
  });

  it('should remove course', () => {
    const courses = service.removeItem(3);
    coursesMock.splice(2, 1);
    expect(courses).toBe(coursesMock);
  });
});


