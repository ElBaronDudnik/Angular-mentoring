import { CourseInterface } from '../courses-page/course.interface';

export const testCoursesMock: CourseInterface[] = [{
  id: 1,
  name: 'Video Course 1. Name Tag',
  length: 72,
  date: new Date(2017, 12, 11).toDateString(),
  description: `Learn about where`,
  isTopRated: true,
}, {
  id: 2,
  name: 'Video Course 2. Name Tag',
  length: 22,
  date: new Date(2011, 6, 10).toDateString(),
  description: `Learn about where you can.`
}, {
  id: 3,
  name: 'Video Course 3. Name Tag',
  length: 61,
  date: new Date(2012, 8, 14).toDateString(),
  description: `Learn.`
}];
