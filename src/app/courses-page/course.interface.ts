export interface CourseInterface {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors?: IAuthors[];
  isTopRated?: boolean;
}

export interface IAuthors {
  id: number;
  name: string;
  lastName: string;
}
