import { OrderCoursesByDatePipe } from './order-courses-by-date.pipe';
import { testCoursesMock } from '../../test-courses.mock';

describe('OrderByPipe', () => {
  let orderByPipe: OrderCoursesByDatePipe;
  const coursesArray = testCoursesMock;

  beforeEach(() => {
    orderByPipe = new OrderCoursesByDatePipe();
  });

  it('should return null in case of no courses', () => {
    const transformed = orderByPipe.transform([]);

    expect(transformed).toEqual(null);
  })

  it('should sort courses by date', () => {
    const transformed = orderByPipe.transform(coursesArray);

    expect(transformed).toEqual([{
      id: 1,
      title: 'Video Course 1. Name Tag',
      duration: 72,
      creationDate: new Date(2017, 12, 11),
      description: `Learn about where`,
      topRated: true,
    }, {
      id: 3,
      title: 'Video Course 3. Name Tag',
      duration: 61,
      creationDate: new Date(2012, 8, 14),
      description: `Learn.`
    }, {
      id: 2,
      title: 'Video Course 2. Name Tag',
      duration: 22,
      creationDate: new Date(2011, 6, 10),
      description: `Learn about where you can.`
    }]);
  });
});
