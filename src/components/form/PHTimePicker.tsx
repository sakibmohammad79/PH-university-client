import { DatePicker, Form, TimePicker } from "antd";
import { Controller } from "react-hook-form";

type TTimePickerProps = {
  name: string;
  label?: string;
};

const PHTimePicker = ({ name, label }: TTimePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <TimePicker
              format={"HH:mm"}
              style={{ width: "100%" }}
              {...field}
              size="large"
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHTimePicker;
