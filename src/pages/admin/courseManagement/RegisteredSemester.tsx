import { Button, Table } from "antd";
import type { TableColumnsType } from "antd";

import { TSemesterRegistration } from "../../../types/courseManagement";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement.api";

export type TTableData = Pick<
  TSemesterRegistration,
  "name" | "startDate" | "endDate" | "status"
>;

const RegisteredSemester = () => {
  const { data: registeredSemesteredData, isFetching } =
    useGetAllRegisteredSemestersQuery(undefined);

  const tableData = registeredSemesteredData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      status,
      startDate,
      endDate,
    })
  );
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "academicSemester",
      dataIndex: "academicSemester",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData} />
  );
};

export default RegisteredSemester;
