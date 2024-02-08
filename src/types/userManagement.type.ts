import {
  TAcademicDepartment,
  TAcademicFaculty,
  TAcademicSemester,
} from "./academicManagement.type";

export type TStudent = {
  _id: string;
  id: string;
  user: TUser;
  name: TName;
  gender: string;
  contactNo: string;
  dateOfBirth: string;
  email: string;
  avatar: string;
  emergencyContactNo: string;
  bloodGroup: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg: string;
  admissionSemester: TAcademicSemester;
  academicDepartment: TAcademicDepartment;
  academicFaculty: TAcademicFaculty;
  isDeleted: boolean;
  fullName: string;
};

export type TUser = {
  _id: string;
  id: string;
  email: string;
  needsPasswordChnage: boolean;
  role: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherContactNo: string;
  fatherOccupation: string;
  motherName: string;
  motherContactNo: string;
  motherOccupation: string;
  _id: string;
};

export type TLocalGuardian = {
  name: string;
  contactNo: string;
  occupation: string;
  address: string;
  _id: string;
};

//faculty type

export type TFaculty = {
  _id: string;
  id: string;
  user: string;
  designation: string;
  name: TFacultyName;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: string;
  presentAddress: string;
  permanentAddress: string;
  profileImg: string;
  academicDepartment: TAcademicDepartment;
  academicFaculty: TAcademicFaculty;
  isDeleted: boolean;
  fullName: string;
};

export type TFacultyName = {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
};

//admin

export type TAdmin = {
  _id: string;
  id: string;
  user: string;
  designation: string;
  name: TadminName;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: string;
  presentAddress: string;
  permanentAddress: string;
  profileImg: string;
  academicDepartment: TAcademicDepartment;
  academicFaculty: TAcademicFaculty;
  isDeleted: boolean;
  fullName: string;
};

export type TadminName = {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
};
