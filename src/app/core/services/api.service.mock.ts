import {CourseInterface} from '../../courses-page/course.interface';
import {coursesMock} from '../../courses-page/courses.mock';

export class ApiServiceStub {
  getCoursesList(): CourseInterface[] {
    return coursesMock;
  }

  createCourse(): CourseInterface[] {
    coursesMock.push({
      id: 10,
      title: 'Angular Course',
      creationDate: new Date(12, 11, 2019),
      duration: 12,
      description: 'Angular course description'
    });
    return coursesMock;
  }

  getCourseById(): CourseInterface | undefined {
    return {
      id: 10,
      title: 'Video Course 3. Name Tag',
      duration: 61,
      creationDate: new Date(2012, 8, 14),
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
      title: 'Angular Course',
      creationDate: new Date(12, 11, 2019),
      duration: 12,
      description: 'Angular course description'
    };
  }

  removeItem() {
    coursesMock.splice(3, 1);
    return coursesMock;
  }
}
