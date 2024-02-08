import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterStatusOptions } from "../../../constants/semester";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { TSemesterRegistration } from "../../../types/courseManagement";
import { useAddRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement.api";

const SemesterRegistration = () => {
  const { data: academicSemesterData } = useGetAllAcademicSemestersQuery([
    { name: "sort", value: "year" },
  ]);

  const [addRegisteredSemester, { data, error }] =
    useAddRegisteredSemesterMutation();
  console.log({ data, error });
  const semesterOptions = academicSemesterData?.data?.map((semester) => ({
    label: `${semester.name} ${semester.year}`,
    value: semester._id,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const semesterRegistrationData = {
      ...data,
      maxCredit: Number(data.maxCredit),
      minCredit: Number(data.minCredit),
    };

    try {
      const res = (await addRegisteredSemester(
        semesterRegistrationData
      )) as TResponse<TSemesterRegistration>;
      if (res.error) {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 3000 });
      } else {
        toast.success("Semester registered successfully!", {
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
          <PHSelect
            name="academicSemester"
            label="Academic Semester"
            options={semesterOptions}
          ></PHSelect>
          <PHSelect
            name="status"
            label="Semester Status"
            options={semesterStatusOptions}
          ></PHSelect>
          <PHDatePicker name="startDate" label="Start Date"></PHDatePicker>
          <PHDatePicker name="endDate" label="End Date"></PHDatePicker>
          <PHInput type="number" name="maxCredit" label="Max Credit"></PHInput>
          <PHInput type="number" name="minCredit" label="Min Credit"></PHInput>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
