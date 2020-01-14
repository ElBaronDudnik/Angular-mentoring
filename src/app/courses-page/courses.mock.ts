import { CourseInterface } from './course.interface';

export const coursesMock: CourseInterface[] = [{
    id: 1,
    name: 'Video Course 1. Name Tag',
    length: 72,
    date: String(new Date(2017, 12, 11)),
    description: `Learn about where you can find course descriptions,
    what information they include, how they work, and details about
    various components of a course description. Course descriptions
    report information about a university or college\'s classes.
    They\'re published both in course catalogs that outline degree
    requirements and in course schedules that contain descriptions
    for all courses offered during a particular semester.`,
    isTopRated: true,
  }
]
