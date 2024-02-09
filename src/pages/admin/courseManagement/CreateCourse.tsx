import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

import { toast } from "sonner";

import PHInput from "../../../components/form/PHInput";

import {
  useAddcourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement.api";
import { TResponse } from "../../../types";

const CreateCourse = () => {
  const { data: coursesData } = useGetAllCoursesQuery(undefined);

  const [addCourse, { error, data }] = useAddcourseMutation();
  console.log({ error, data });
  const preRequisiteCoursesOptions = coursesData?.data?.map((course) => ({
    label: course.title,
    value: course._id,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const coursesData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data?.preRequisiteCourses
        ? data?.preRequisiteCourses?.map((item) => ({
            course: item,
            isDeleted: false,
          }))
        : [],
    };
    console.log(coursesData);

    try {
      const res = (await addCourse(coursesData)) as TResponse<any>;
      if (res.error) {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 3000 });
      } else {
        toast.success("Course Created successfully!", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 3000 });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={12}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="title" label="Title"></PHInput>
          <PHInput type="text" name="prefix" label="Prefix"></PHInput>
          <PHInput type="text" name="code" label="Code"></PHInput>
          <PHInput type="text" name="credits" label="Credits"></PHInput>
          <PHSelect
            mode="multiple"
            name="preRequisiteCourses"
            label="PreRequisite Courses"
            options={preRequisiteCoursesOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
