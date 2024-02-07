import { baseApi } from "../../api/baseApi";

const userManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllAcademicSemesters: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();
    //     if (args) {
    //       args?.forEach((item: TQueryParam) => {
    //         params.append(item.name, item.value as string);
    //       });
    //     }
    //     return {
    //       url: "/academic-semesters",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
    //     return {
    //       meta: response.meta,
    //       data: response.data,
    //     };
    //   },
    // }),
    addStudent: builder.mutation({
      query: (studentData) => ({
        url: "/users/create-student",
        method: "POST",
        body: studentData,
      }),
    }),
  }),
});

export const { useAddStudentMutation } = userManagement;
