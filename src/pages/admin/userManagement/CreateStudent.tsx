import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";

const studemDamiData = {
  password: "student123",
  student: {
    name: {
      firstName: "Md",
      middleName: "Mohammad",
      lastName: "Sakib",
    },
    gender: "male",
    contactNo: "1234567891",
    dateOfBirth: "2000-01-01",
    email: "sakib2@gmail.com",
    avatar: "avatar.jpg",
    emergencyContactNo: "9876543210",
    bloodGroup: "A+",
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
    admissionSemester: "65bb670f62ab4d107a950f0b",
    academicDepartment: "65bb65c9f638c495497d9443",
  },
};

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name" label="Name"></PHInput>
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateStudent;
