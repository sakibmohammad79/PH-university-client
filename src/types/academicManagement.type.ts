export type TAcademicSemester = {
  _id: string;
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
};

export type TAcademicFaculty = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type AcademicFaculty = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type TAcademicDepartment = {
  _id: string;
  name: string;
  academicFaculty: AcademicFaculty;
  createdAt: string;
  updatedAt: string;
};

export type TFaculty = {
  faculty: TFacultyInfo;
};

export type TFacultyInfo = {
  designation: string;
  name: TName;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: string;
  presentAddress: string;
  permanentAddress: string;
  academicDepartment: string;
  isDeleted: boolean;
};

export type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

//admin

export type TAdmin = {
  admin: TAdminInfo;
};
export type TAdminInfo = {
  designation: string;
  name: TAdminName;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: string;
  presentAddress: string;
  permanentAddress: string;
};
export type TAdminName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
