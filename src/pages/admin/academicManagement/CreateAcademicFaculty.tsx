import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";

import PHSelect from "../../../components/form/PHSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { facultyOptions } from "../../../constants/faculty";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { TAcademicFaculty } from "../../../types/academicManagement.type";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("loading");
    try {
      const facultyData = {
        name: data.name,
      };

      const res = (await addAcademicFaculty(
        facultyData
      )) as TResponse<TAcademicFaculty>;
      console.log(res);
      if (res.error) {
        toast.error(res?.error?.data?.message, {
          id: toastId,
          duration: 3000,
        });
      } else {
        toast.success("Faculty created successfully!", {
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
            name="name"
            label="Faculty"
            options={facultyOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
