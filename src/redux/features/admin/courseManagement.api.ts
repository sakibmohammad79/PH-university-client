import { TQueryParam, TResponseRedux } from "../../../types";
import { TSemesterRegistration } from "../../../types/courseManagement";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args?.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/semester-registrations",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["semester"],
      transformResponse: (
        response: TResponseRedux<TSemesterRegistration[]>
      ) => {
        return {
          meta: response.meta,
          data: response.data,
        };
      },
    }),
    addRegisteredSemester: builder.mutation({
      query: (semesterRegistrationData) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: semesterRegistrationData,
      }),
      invalidatesTags: ["semester"],
    }),
    updateRegisteredSemester: builder.mutation({
      query: (args) => {
        return {
          url: `/semester-registrations/${args.id}`,
          method: "PATCH",
          body: args.data,
        };
      },
      invalidatesTags: ["semester"],
    }),
  }),
});

export const {
  useAddRegisteredSemesterMutation,
  useGetAllRegisteredSemestersQuery,
  useUpdateRegisteredSemesterMutation,
} = courseManagementApi;