export type TCourse = {
  _id: string;
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisiteCourses?: any[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};
