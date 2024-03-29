import { Button, Pagination, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../../types";
import { useGetAllStudentsQuery } from "../../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../../types/userManagement.type";
import { Link } from "react-router-dom";

export type TTableData = Pick<
  TStudent,
  "id" | "fullName" | "email" | "contactNo"
>;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>([]);
  const [page, setPage] = useState(1);
  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const metaData = studentData?.meta;

  const tableData = studentData?.data?.map(
    ({ _id, id, fullName, email, contactNo }) => ({
      key: _id,
      fullName,
      id,
      email,
      contactNo,
    })
  );
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Student Name",
      key: "name",
      dataIndex: "fullName",
    },
    {
      title: "Student ID.",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Contact No.",
      key: "contactNo",
      dataIndex: "contactNo",
    },

    {
      title: "Action",
      key: "action",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/student-data/details/${item?.key}`}>
              <Button>Details</Button>
            </Link>
            <Link to={`/admin/student-data/update/${item?.key}`}>
              <Button>Update</Button>
            </Link>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
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
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default StudentData;
