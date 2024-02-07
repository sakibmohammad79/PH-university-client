import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import {
  useGetAllAcademicSemestersQuery,
  useGetAllDepartmentsQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api";

// const studemDamiData = {
//   password: "student123",
//   student: {
//     name: {
//       firstName: "Md",
//       middleName: "Mohammad",
//       lastName: "Sakib",
//     },
//     gender: "male",
//     bloodGroup: "A+",
//     dateOfBirth: "2000-01-01",

//     email: "student123@gmail.com",
//     contactNo: "1234567891",
//     emergencyContactNo: "9876543210",
//     presentAddress: "123 Main St, City",
//     permanentAddress: "456 Park Ave, Town",

//     guardian: {
//       fatherName: "John Doe Sr.",
//       fatherContactNo: "1111111111",
//       fatherOccupation: "Engineer",
//       motherName: "Jane Doe",
//       motherContactNo: "2222222222",
//       motherOccupation: "Doctor",
//     },
//     localGuardian: {
//       name: "Local Guardian",
//       contactNo: "3333333333",
//       occupation: "Teacher",
//       address: "789 Street, Local City",
//     },

//     admissionSemester: "65bb670f62ab4d107a950f0b",
//     academicDepartment: "65bb65c9f638c495497d9443",
//   },
// };

const studentDefaultValues = {
  name: {
    firstName: "Md",
    middleName: "Mohammad",
    lastName: "Sakib",
  },
  gender: "male",
  bloodGroup: "A+",
  // dateOfBirth: "2000-01-01",

  // email: "student1234@gmail.com",
  contactNo: "1234567891",
  emergencyContactNo: "9876543210",
  presentAddress: "123 Main St, City",
  permanentAddress: "456 Park Ave, Town",

  guardian: {
    fatherName: "John Doe Sr.",
    fatherContactNo: "1111111111",
    fatherOccupation: "Engineer",
    motherName: "Jane Doe",
    motherContactNo: "2222222222",
    motherOccupation: "Doctor",
  },
  localGuardian: {
    name: "Local Guardian",
    contactNo: "3333333333",
    occupation: "Teacher",
    address: "789 Street, Local City",
  },

  // admissionSemester: "65bb670f62ab4d107a950f0b",
  // academicDepartment: "65bb65c9f638c495497d9443",
};

const CreateStudent = () => {
  //academicSemester option create
  const { data: semesterData, isLoading: semesterLoading } =
    useGetAllAcademicSemestersQuery(undefined);
  const semesterOptions = semesterData?.data?.map(({ _id, name, year }) => ({
    label: `${name} ${year}`,
    value: _id,
  }));
  //academicDeparment opetion create
  const { data: departmentData, isLoading: departmentLoading } =
    useGetAllDepartmentsQuery(undefined);
  const departmentOptions = departmentData?.data?.map(({ _id, name }) => ({
    label: name,
    value: _id,
  }));

  const [addStudent, { error, data }] = useAddStudentMutation();
  console.log({ error, data });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const studentData = {
      password: "student123",
      student: data,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.image);
    addStudent(formData);
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
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
          <Divider>Gurdian Info</Divider>
          <Row gutter={12}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherName"
                label="Father Name"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherOccupation"
                label="Father Occupation"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="number"
                name="guardian.fatherContactNo"
                label="Father Contact No."
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherName"
                label="Mother Name"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherOccupation"
                label="Mother Occupation"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="number"
                name="guardian.motherContactNo"
                label="Mother Contact No."
              ></PHInput>
            </Col>
          </Row>
          <Divider>Local Gurdian Info</Divider>
          <Row gutter={12}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.name"
                label="Name"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.occupation"
                label="Occupation"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="number"
                name="localGuardian.contactNo"
                label="Contact No."
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.address"
                label="Address"
              ></PHInput>
            </Col>
          </Row>
          <Divider>Academic Info</Divider>
          <Row gutter={12}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="admissionSemester"
                label="Academic Semester"
                options={semesterOptions}
                disabled={semesterLoading}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="academicDepartment"
                label="Academic Department"
                options={departmentOptions}
                disabled={departmentLoading}
              ></PHSelect>
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
