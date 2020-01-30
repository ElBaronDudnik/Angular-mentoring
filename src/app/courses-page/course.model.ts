import {CourseInterface, IAuthor} from './course.interface';

export class Course implements CourseInterface {
  public id: number;
  public name: string;
  public date: string;
  public length: number;
  public description: string;
  public authors?: IAuthor[];
  public isTopRated?: boolean;

  constructor(props: CourseInterface) {
    this.id = props.id || 0;
    this.name = props.name || '';
    this.date = props.date || '';
    this.length = props.length || 0;
    this.description = props.description || '';
    this.authors = props.authors || undefined;
    this.isTopRated = props.isTopRated || false;
  }
}
