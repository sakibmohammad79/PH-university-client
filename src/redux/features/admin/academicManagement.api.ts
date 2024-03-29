import { TQueryParam, TResponseRedux } from "../../../types";
import {
  TAcademicDepartment,
  TAcademicFaculty,
  TAcademicSemester,
} from "../../../types/academicManagement.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args?.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          meta: response.meta,
          data: response.data,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (semesterData) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: semesterData,
      }),
    }),
    getAllAcademicFaculty: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args?.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/academic-faculties",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
        return {
          meta: response.meta,
          data: response.data,
        };
      },
    }),
    addAcademicFaculty: builder.mutation({
      query: (facultyData) => {
        console.log(facultyData);
        return {
          url: "/academic-faculties/create-academic-faculty",
          method: "POST",
          body: facultyData,
        };
      },
    }),
    getAllDepartments: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args?.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/academic-departments",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          meta: response.meta,
          data: response.data,
        };
      },
    }),
    addAcademicDepartment: builder.mutation({
      query: (departmentData) => {
        return {
          url: "/academic-departments/create-academic-department",
          method: "POST",
          body: departmentData,
        };
      },
    }),
  }),
});

export const {
  useGetAllAcademicSemestersQuery,
  useAddAcademicSemesterMutation,
  useGetAllAcademicFacultyQuery,
  useAddAcademicFacultyMutation,
  useGetAllDepartmentsQuery,
  useAddAcademicDepartmentMutation,
} = academicManagementApi;
