import { Button, Row } from "antd";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement.api";
import { useAppDispatch } from "../redux/hooks";
import { logOut } from "../redux/features/auth/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { TResponse } from "../types";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [changePassword] = useChangePasswordMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const res = (await changePassword(data)) as TResponse<any>;
    console.log(res);
    if (res?.data?.success) {
      dispatch(logOut());
      navigate("/login");
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="oldPassword" label="Old Password"></PHInput>
        <PHInput type="text" name="newPassword" label="New Password: " />
        <Button htmlType="submit">Password Change</Button>
      </PHForm>
    </Row>
  );
};

export default ChangePassword;
