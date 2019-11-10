import { CourseInterface } from './course.interface';

export class Course implements CourseInterface {
  public id: number;
  public title: string;
  public creationDate: Date;
  public duration: number;
  public description: string;
  public topRated?: boolean;

  constructor(props: CourseInterface) {
    this.id = props.id || 0;
    this.title = props.title || '';
    this.creationDate = props.creationDate || null;
    this.duration = props.duration || 0;
    this.description = props.description || '';
    this.topRated = props.topRated || false;
  }
}
