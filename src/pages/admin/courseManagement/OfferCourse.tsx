import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import {
  useAddOfferCourseMutation,
  useGetAllCoursesQuery,
  useGetAllRegisteredSemestersQuery,
  useGetSingleCourseFacultiesQuery,
} from "../../../redux/features/admin/courseManagement.api";
import {
  useGetAllAcademicFacultyQuery,
  useGetAllDepartmentsQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHInput from "../../../components/form/PHInput";
import { dayNameOptions } from "../../../constants/global";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import { useState } from "react";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import PHTimePicker from "../../../components/form/PHTimePicker";

const OfferCourse = () => {
  const [courseId, setCourseId] = useState("");

  const [addOfferCouse, { error, data }] = useAddOfferCourseMutation();
  console.log({ data, error });
  const { data: singleCourseFaculties } =
    useGetSingleCourseFacultiesQuery(courseId);

  const { data: registeredSemesterData } =
    useGetAllRegisteredSemestersQuery(undefined);
  const { data: academicFacultyData } =
    useGetAllAcademicFacultyQuery(undefined);
  const { data: depertmentData } = useGetAllDepartmentsQuery(undefined);
  const { data: courseData } = useGetAllCoursesQuery(undefined);

  const registeredSemesterOptions = registeredSemesterData?.data?.map(
    ({ _id, academicSemester }) => ({
      key: _id,
      label: `${academicSemester.name} ${academicSemester.year}`,
      value: _id,
    })
  );

  const academicFacultyOptions = academicFacultyData?.data?.map(
    ({ _id, name }) => ({
      key: _id,
      label: name,
      value: _id,
    })
  );

  const depertmenOptions = depertmentData?.data?.map(({ _id, name }) => ({
    key: _id,
    label: name,
    value: _id,
  }));

  const courseOptions = courseData?.data?.map(({ _id, title }) => ({
    key: _id,
    label: title,
    value: _id,
  }));

  const facultyOptions = singleCourseFaculties?.data?.faculties?.map(
    (item) => ({
      key: item._id,
      label: item.fullName,
      value: item._id,
    })
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    try {
      const offerCourseData = {
        ...data,
        section: Number(data.section),
        maxCapacity: Number(data.maxCapacity),
      };

      console.log(offerCourseData);

      const res = (await addOfferCouse(offerCourseData)) as TResponse<any>;

      if (res.error) {
        toast.error(res?.error?.data?.message, {
          id: toastId,
          duration: 3000,
        });
      } else {
        toast.success("Offered course created successfully!", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong.", {
        id: toastId,
        duration: 3000,
      });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={12}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            name="semesterRegistration"
            label="Registered Semester"
            options={registeredSemesterOptions}
          ></PHSelect>
          <PHSelect
            name="academicFaculty"
            label="Academic Faculty"
            options={academicFacultyOptions}
          ></PHSelect>
          <PHSelect
            name="academicDepartment"
            label="Acdemic Department"
            options={depertmenOptions}
          ></PHSelect>
          <PHSelectWithWatch
            onValueChange={setCourseId}
            name="course"
            label="Course"
            options={courseOptions}
          ></PHSelectWithWatch>
          <PHSelect
            disabled={!courseId}
            name="faculty"
            label="Course Faculty"
            options={facultyOptions}
          ></PHSelect>

          <PHInput
            type="number"
            name="maxCapacity"
            label="Max Capacity"
          ></PHInput>
          <PHInput type="number" name="section" label="Section"></PHInput>
          <PHSelect
            mode="multiple"
            name="days"
            label="Days"
            options={dayNameOptions}
          ></PHSelect>
          <PHTimePicker name="startTime" label="Start Time"></PHTimePicker>
          <PHTimePicker name="endTime" label="End Time"></PHTimePicker>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
