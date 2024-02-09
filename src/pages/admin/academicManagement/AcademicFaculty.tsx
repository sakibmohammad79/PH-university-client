import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { TQueryParam } from "../../../types";
import { useState } from "react";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";

export type TFacultyTableData = Pick<TAcademicSemester, "name" | "_id">;

const AcademicFaculty = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: facultyData, isFetching } =
    useGetAllAcademicFacultyQuery(params);

  const tableData = facultyData?.data?.map(({ _id, name }) => ({
    name,
    _id,
  }));

  const columns: TableColumnsType<TFacultyTableData> = [
    {
      title: "Faculty Name",
      key: "name",
      dataIndex: "name",
      filters: [
        {
          text: "Faculty Of Web Development",
          value: "Faculty Of Web Development",
        },
        {
          text: "Faculty Of Programming",
          value: "Faculty Of Programming",
        },
        {
          text: "faculty of computer science and engineering",
          value: "faculty of computer science and engineering",
        },
        {
          text: "Faculty of Business Administration",
          value: "Faculty of Business Administration",
        },
      ],
    },
    {
      title: "Faculty Id.",
      key: "_id",
      dataIndex: "_id",
    },

    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <Space>
            <Button>Update</Button>
            <Button>Delete</Button>
          </Space>
        );
      },
    },
  ];

  const onChange: TableProps<TFacultyTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action == "filter") {
      const queryParams: TQueryParam[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default AcademicFaculty;
