import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
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
    addRegisteredSemester: builder.mutation({
      query: (semesterRegistrationData) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: semesterRegistrationData,
      }),
    }),
  }),
});

export const { useAddRegisteredSemesterMutation } = courseManagementApi;
