import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });

  const [login] = useLoginMutation();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 3000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 3000 });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" {...register("userId")} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">submit</Button>
      </form>
    </div>
  );
};

export default Login;
