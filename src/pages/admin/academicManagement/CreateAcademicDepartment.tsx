import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";

import {
  useAddAcademicDepartmentMutation,
  useGetAllFacultiesQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { TAcademicDepartment } from "../../../types/academicManagement.type";
import PHInput from "../../../components/form/PHInput";
import { academicDepartmentSchema } from "../../../schemas/academicDepartment.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateAcademicDepartment = () => {
  const { data: facultyData } = useGetAllFacultiesQuery(undefined);

  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();

  const facultyOptions = facultyData?.data?.map(({ _id, name }) => ({
    label: name,
    value: _id,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Academic Department");
    const departmentData = {
      name: data.name,
      academicFaculty: data.academicFaculty,
    };

    try {
      const res = (await addAcademicDepartment(
        departmentData
      )) as TResponse<TAcademicDepartment>;
      if (res.error) {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 3000 });
      } else {
        toast.success("Academic Department created successfully!", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 3000 });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={12}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <PHInput type="text" name="name" label="Department"></PHInput>
          <PHSelect
            name="academicFaculty"
            label="Faculty"
            options={facultyOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
