import { TQueryParam, TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.type";
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
  }),
});

export const {
  useGetAllAcademicSemestersQuery,
  useAddAcademicSemesterMutation,
} = academicManagementApi;
