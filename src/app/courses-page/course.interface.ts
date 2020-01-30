export interface CourseInterface {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors?: IAuthor[];
  isTopRated?: boolean;
}

export interface IAuthor {
  id: number;
  name: string;
  lastName: string;
}
