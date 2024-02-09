import { Button, Modal, Table } from "antd";
import type { TableColumnsType } from "antd";
import {
  useAddFacultiesMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement.api";
import { TCourse } from "../../../constants/course";
import { useState } from "react";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement.api";

export type TTableData = Pick<TCourse, "title" | "code">;

const Courses = () => {
  const { data: courseData, isFetching } = useGetAllCoursesQuery(undefined);

  const tableData = courseData?.data?.map(({ _id, title, prefix, code }) => ({
    key: _id,
    title,
    code: `${prefix}${code}`,
  }));
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Course Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },

    {
      title: "Action",
      key: "x",
      render: (item) => {
        return <AddFacultyModal facultyInfo={item} />;
      },
    },
  ];

  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData} />
  );
};

const AddFacultyModal = ({ facultyInfo }) => {
  const { data: facultyData } = useGetAllFacultiesQuery(undefined);

  const [addFaculties, { data }] = useAddFacultiesMutation();

  console.log(data);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const facultiesData = {
      courseId: facultyInfo.key,
      data,
    };
    addFaculties(facultiesData);
  };
  //faculty options
  const facultyOptions = facultyData?.data?.map((faculty) => ({
    label: faculty.fullName,
    value: faculty._id,
  }));

  return (
    <>
      <Button onClick={showModal}>Assign Faculty</Button>
      <Modal
        title="Assign Faculty"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <PHForm onSubmit={handleSubmit}>
          <PHSelect
            mode="multiple"
            label="Faculties"
            name="faculties"
            options={facultyOptions}
          ></PHSelect>
          <Button htmlType="submit">Assign Faculty</Button>
        </PHForm>
      </Modal>
    </>
  );
};

export default Courses;
