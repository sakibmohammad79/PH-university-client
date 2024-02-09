import { TCourse } from "../../../constants/course";
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
    getAllCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args?.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["courses"],
      transformResponse: (response: TResponseRedux<TCourse[]>) => {
        return {
          meta: response.meta,
          data: response.data,
        };
      },
    }),
    addcourse: builder.mutation({
      query: (courseData) => ({
        url: "/courses/create-course",
        method: "POST",
        body: courseData,
      }),
      invalidatesTags: ["semester"],
    }),
    addFaculties: builder.mutation({
      query: (args) => ({
        url: `/courses/${args.courseId}/assign-faculties`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["semester"],
    }),
    getSingleCourseFaculties: builder.query({
      query: (courseId) => {
        return {
          url: `/courses/${courseId}/get-faculties`,
          method: "GET",
        };
      },
    }),
    addOfferCourse: builder.mutation({
      query: (offerCourseData) => ({
        url: `offered-courses/create-offered-course`,
        method: "POST",
        body: offerCourseData,
      }),
      invalidatesTags: ["courses"],
    }),
  }),
});

export const {
  useAddRegisteredSemesterMutation,
  useGetAllRegisteredSemestersQuery,
  useUpdateRegisteredSemesterMutation,
  useGetAllCoursesQuery,
  useAddcourseMutation,
  useAddFacultiesMutation,
  useGetSingleCourseFacultiesQuery,
  useAddOfferCourseMutation,
} = courseManagementApi;
