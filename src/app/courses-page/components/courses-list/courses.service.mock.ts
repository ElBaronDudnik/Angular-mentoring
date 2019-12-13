import { CourseInterface } from '../../course.interface';
import { coursesMock } from '../../courses.mock';

export class CoursesServiceStub {
  private courses !: CourseInterface[];

  get coursesList(): CourseInterface[] {
    return coursesMock;
  }

  set coursesList(courses) {
    this.courses = courses;
  }

  createCourse(): CourseInterface[] {
    coursesMock.push({
      id: 10,
      name: 'Angular Course',
      date: new Date(12, 11, 2019).toDateString(),
      length: 12,
      description: 'Angular course description'
    });
    return coursesMock;
  }

  getCourseById(): CourseInterface | undefined {
    return {
      id: 10,
      name: 'Video Course 3. Name Tag',
      length: 61,
      date: new Date(2012, 8, 14).toDateString(),
      description: `Learn about where you can find course descriptions,
    what information they include, how they work, and details about
    various components of a course description. Course descriptions
    report information about a university or college\'s classes.
    They\'re published both in course catalogs that outline degree
    requirements and in course schedules that contain descriptions
    for all courses offered during a particular semester.`
    };
  }

  updateItem(): void {
    coursesMock[5] = {
      id: 10,
      name: 'Angular Course',
      date: new Date(12, 11, 2019).toDateString(),
      length: 12,
      description: 'Angular course description'
    };
  }

  removeItem() {
    coursesMock.splice(3, 1);
    return coursesMock;
  }
}
