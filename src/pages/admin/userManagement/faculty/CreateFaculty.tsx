import { Button, Col, Divider, Form, Input, Row } from "antd";
import { useGetAllDepartmentsQuery } from "../../../../redux/features/admin/academicManagement.api";
import PHForm from "../../../../components/form/PHForm";
import PHInput from "../../../../components/form/PHInput";
import PHSelect from "../../../../components/form/PHSelect";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHDatePicker from "../../../../components/form/PHDatePicker";
import { bloodGroupOptions, genderOptions } from "../../../../constants/global";
import { facultyDesignationOptions } from "../../../../constants/faculty";
import { useAddFacultyMutation } from "../../../../redux/features/admin/userManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../../types";
import { TFaculty } from "../../../../types/academicManagement.type";

const CreateFaculty = () => {
  //academicDeparment opetion create
  const { data: departmentData, isLoading: departmentLoading } =
    useGetAllDepartmentsQuery(undefined);
  const departmentOptions = departmentData?.data?.map(({ _id, name }) => ({
    label: name,
    value: _id,
  }));

  const [addFaculty, { error, data }] = useAddFacultyMutation();
  console.log({ error, data });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    console.log(data);
    const facultytData = {
      password: "faculty123",
      faculty: data,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(facultytData));
    formData.append("file", data.image);

    try {
      const res = (await addFaculty(formData)) as TResponse<TFaculty>;
      if (res.error) {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 3000 });
      } else {
        toast.success("Faculty created successfully!", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 3000 });
    }
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Divider>Personal Info</Divider>
          <Row gutter={12}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="name.firstName"
                label="First Name"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="name.middleName"
                label="Middle Name"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="name.lastName"
                label="Last Name"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="gender"
                label="Gender"
                options={genderOptions}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="bloodGroup"
                label="Blood Group"
                options={bloodGroupOptions}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker
                name="dateOfBirth"
                label="Date Of Birth"
              ></PHDatePicker>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      value={value?.fileName}
                      {...field}
                      type="file"
                      onChange={(e) => onChange(e.target.files?.[0])}
                      size="large"
                    ></Input>
                  </Form.Item>
                )}
              />
            </Col>
          </Row>
          <Divider>Contact Info</Divider>
          <Row gutter={12}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="email" name="email" label="Email"></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="number"
                name="contactNo"
                label="Contact No."
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="number"
                name="emergencyContactNo"
                label="Emergency Contact No."
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="presentAddress"
                label="Present Address"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="permanentAddress"
                label="PermanentAddress"
              ></PHInput>
            </Col>
          </Row>
          <Divider>Academic Info</Divider>
          <Row gutter={12}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="academicDepartment"
                label="Academic Department"
                options={departmentOptions}
                disabled={departmentLoading}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="designation"
                label="Designation"
                options={facultyDesignationOptions}
              ></PHSelect>
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateFaculty;
