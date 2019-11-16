import { FilterCoursesByNamePipe } from './filter-courses-by-name.pipe';
import { testCoursesMock } from '../../test-courses.mock';

describe('FilterPipe', () => {
  let filterPipe: FilterCoursesByNamePipe;
  const coursesArray = testCoursesMock;

  beforeEach(() => {
    filterPipe = new FilterCoursesByNamePipe();
  });

  it('should filter courses by query', () => {
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
