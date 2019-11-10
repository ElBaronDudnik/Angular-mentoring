import { FilterPipe } from './filter.pipe';
import { CourseInterface } from '../../../courses-page/course.interface';

describe('FilterPipe', () => {
  let filterPipe: FilterPipe;
  const coursesArray: CourseInterface[] = [{
    id: 1,
    title: 'Video Course 1. Name Tag',
    duration: 72,
    creationDate: new Date(2017, 12, 11),
    description: `Learn about where`,
    topRated: true,
  }, {
    id: 2,
    title: 'Video Course 2. Name Tag',
    duration: 22,
    creationDate: new Date(2011, 6, 10),
    description: `Learn about where you can.`
  }, {
    id: 3,
    title: 'Video Course 3. Name Tag',
    duration: 61,
    creationDate: new Date(2012, 8, 14),
    description: `Learn.`
  }]

  beforeEach(() => {
    filterPipe = new FilterPipe();
  });

  it('create an instance', () => {
    expect(filterPipe).toBeDefined();
  });

  it('should return corresponding array due to search query', () => {
    const searchQuery = 'Video Course 2';

    const transformed = filterPipe.transform(searchQuery, coursesArray);

    expect(transformed).toEqual([{
      id: 2,
      title: 'Video Course 2. Name Tag',
      duration: 22,
      creationDate: new Date(2011, 6, 10),
      description: `Learn about where you can.`
    }]);
  });
});
