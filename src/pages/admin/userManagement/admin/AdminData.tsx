import { Button, Pagination, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam } from "../../../../types";
import { useGetAllAdminsQuery } from "../../../../redux/features/admin/userManagement.api";
import { TAdmin } from "../../../../types/userManagement.type";

export type TTableData = Pick<
  TAdmin,
  "id" | "fullName" | "email" | "contactNo"
>;

const AdminData = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>([]);
  const [page, setPage] = useState(1);
  const { data: adminData, isFetching } = useGetAllAdminsQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const metaData = adminData?.meta;

  const tableData = adminData?.data?.map(
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
      render: () => {
        return (
          <Space>
            {/* <Link to={`/admin/student-data/details/${item?.key}`}> */}
            <Button>Details</Button>
            {/* </Link> */}
            {/* <Link to={`/admin/student-data/update/${item?.key}`}> */}
            <Button>Update</Button>
            {/* </Link> */}
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

export default AdminData;
